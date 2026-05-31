create extension if not exists pgcrypto;

create table if not exists public.poll_options (
  id uuid primary key default gen_random_uuid(),
  label text not null unique,
  sort_order integer not null unique,
  initial_votes integer not null default 0 check (initial_votes >= 0)
);

create table if not exists public.poll_votes (
  id bigint generated always as identity primary key,
  option_id uuid not null references public.poll_options(id) on delete restrict,
  created_at timestamptz not null default now(),
  page_url text,
  user_agent text
);

insert into public.poll_options (label, sort_order, initial_votes)
values
  ('Rights', 1, 13),
  ('Self-government', 2, 10),
  ('Independence Day', 3, 8),
  ('Checks on power', 4, 7)
on conflict (label) do update
set sort_order = excluded.sort_order,
    initial_votes = excluded.initial_votes;

alter table public.poll_options enable row level security;
alter table public.poll_votes enable row level security;

revoke all on table public.poll_options from anon, authenticated;
revoke all on table public.poll_votes from anon, authenticated;

create or replace function public.get_poll_results()
returns table (
  label text,
  votes integer,
  sort_order integer
)
language sql
stable
security definer
set search_path = public
as $$
  select
    poll_options.label,
    (poll_options.initial_votes + count(poll_votes.id))::integer as votes,
    poll_options.sort_order
  from public.poll_options
  left join public.poll_votes on poll_votes.option_id = poll_options.id
  group by poll_options.id, poll_options.label, poll_options.initial_votes, poll_options.sort_order
  order by poll_options.sort_order;
$$;

create or replace function public.record_poll_vote(
  selected_label text,
  page_url text default null,
  user_agent text default null
)
returns table (
  label text,
  votes integer,
  sort_order integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  selected_option_id uuid;
begin
  select id into selected_option_id
  from public.poll_options
  where poll_options.label = selected_label;

  if selected_option_id is null then
    raise exception 'Unknown poll option';
  end if;

  insert into public.poll_votes (option_id, page_url, user_agent)
  values (selected_option_id, left(page_url, 500), left(user_agent, 500));

  return query select * from public.get_poll_results();
end;
$$;

grant execute on function public.get_poll_results() to anon;
grant execute on function public.record_poll_vote(text, text, text) to anon;
