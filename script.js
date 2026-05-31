const questions = [
  {
    question: "What date is most associated with the adoption of the Declaration of Independence?",
    answers: ["July 4, 1776", "September 17, 1787", "April 19, 1775", "July 2, 1788"],
    correct: 0,
    note: "July 4, 1776 is remembered as Independence Day because Congress approved the Declaration's final wording then."
  },
  {
    question: "Which phrase best describes 'consent of the governed'?",
    answers: [
      "Government authority comes from the people",
      "Judges choose every law",
      "Rights exist only during elections",
      "Leaders inherit permanent power"
    ],
    correct: 0,
    note: "Consent means legitimate power depends on the people accepting, shaping, and checking their government."
  },
  {
    question: "Which three rights are named together in the Declaration's best-known sentence?",
    answers: [
      "Speech, press, and religion",
      "Life, liberty, and the pursuit of happiness",
      "Property, privacy, and education",
      "Assembly, petition, and trial"
    ],
    correct: 1,
    note: "The Declaration names life, liberty, and the pursuit of happiness as examples of unalienable rights."
  },
  {
    question: "How many colonies declared independence from Great Britain?",
    answers: ["10", "11", "13", "50"],
    correct: 2,
    note: "Thirteen colonies declared that they were free and independent states."
  },
  {
    question: "Why does the Declaration still matter for the Constitution?",
    answers: [
      "It sets ideals that the Constitution creates structures to protect",
      "It lists every Supreme Court case",
      "It replaced all state governments",
      "It created the modern tax code"
    ],
    correct: 0,
    note: "The Declaration announces principles; the Constitution builds a governing system with limits, representation, and checks."
  },
  {
    question: "Who was the main author of the Declaration's first draft?",
    answers: ["Thomas Jefferson", "George Washington", "Alexander Hamilton", "James Madison"],
    correct: 0,
    note: "Thomas Jefferson wrote the main draft, with edits from a committee and from Congress."
  },
  {
    question: "Which body voted to approve the Declaration?",
    answers: ["The Second Continental Congress", "The Supreme Court", "The Constitutional Convention", "The first U.S. Senate"],
    correct: 0,
    note: "The Second Continental Congress approved the Declaration while meeting in Philadelphia."
  },
  {
    question: "What does 'unalienable rights' mean in the Declaration?",
    answers: [
      "Rights people are born with and should not be taken away",
      "Rights only soldiers can claim",
      "Rights granted by a king",
      "Rights that expire after a war"
    ],
    correct: 0,
    note: "Unalienable rights are treated as inherent rights that government is supposed to secure, not invent."
  },
  {
    question: "Why did the Declaration list grievances against King George III?",
    answers: [
      "To explain why independence was justified",
      "To ask him to write the Constitution",
      "To choose the first president",
      "To create a new tax system"
    ],
    correct: 0,
    note: "The grievances built the case that British rule had violated colonial rights and consent."
  },
  {
    question: "What happened before the Declaration was adopted?",
    answers: [
      "Fighting had already begun at Lexington and Concord",
      "The Bill of Rights had already been ratified",
      "George Washington had already finished two terms as president",
      "The Treaty of Paris had already ended the war"
    ],
    correct: 0,
    note: "The war began in April 1775, more than a year before Congress approved the Declaration."
  }
];

const pollOptions = [
  { label: "Rights", votes: 13 },
  { label: "Self-government", votes: 10 },
  { label: "Independence Day", votes: 8 },
  { label: "Checks on power", votes: 7 }
];

const historyFilters = [
  {
    id: "before",
    label: "Before 1776"
  },
  {
    id: "declaration",
    label: "1776"
  },
  {
    id: "after",
    label: "After 1776"
  }
];

const historyMoments = [
  {
    year: "1765",
    era: "Before 1776",
    filter: "before",
    title: "Stamp Act sparks organized resistance",
    summary: "Parliament taxed printed materials in the colonies, and colonists answered with petitions, assemblies, and boycotts.",
    what: "The Stamp Act placed direct taxes on newspapers, legal papers, pamphlets, and other printed goods used throughout colonial life.",
    why: "It convinced many colonists that Britain was trying to govern and tax them without their consent, planting a core idea that later appears in the Declaration.",
    points: [
      "Colonists argued there should be no taxation without representation.",
      "Crowds protested in the streets while merchants organized boycotts.",
      "Resistance helped different colonies begin acting together."
    ],
    image: "./assets/timeline-stamp-act.svg",
    imagePosition: "14% 20%"
  },
  {
    year: "1770",
    era: "Before 1776",
    filter: "before",
    title: "Boston Massacre turns tension into outrage",
    summary: "British troops fired into a crowd in Boston, killing five colonists and giving patriots a powerful symbol of abuse.",
    what: "An argument between townspeople and British soldiers escalated into gunfire on King Street in Boston.",
    why: "Patriot leaders used the event to argue that standing armies and unaccountable power threatened colonial rights and safety.",
    points: [
      "Paul Revere's engraving spread a dramatic image of the shooting.",
      "The event deepened mistrust of British military authority.",
      "It helped turn local anger into a larger political story."
    ],
    image: "./assets/timeline-boston-massacre.svg",
    imagePosition: "44% 18%"
  },
  {
    year: "1773",
    era: "Before 1776",
    filter: "before",
    title: "Boston Tea Party challenges imperial control",
    summary: "Colonists dumped East India Company tea into Boston Harbor to protest taxation and monopoly power.",
    what: "Men disguised as Mohawk Indians boarded ships and destroyed tea rather than allow it to be unloaded and taxed.",
    why: "The protest declared that colonists would not quietly accept laws made over their heads, and Britain's harsh response pushed the conflict further.",
    points: [
      "The Tea Act was seen as a test of Parliament's right to tax the colonies.",
      "Britain answered with the Coercive Acts, which punished Massachusetts.",
      "Punishment for Boston made other colonies fear they could be next."
    ],
    image: "./assets/timeline-tea-party.svg",
    imagePosition: "72% 24%"
  },
  {
    year: "1774",
    era: "Before 1776",
    filter: "before",
    title: "First Continental Congress builds colonial unity",
    summary: "Delegates from twelve colonies met in Philadelphia to coordinate a common answer to British policy.",
    what: "Colonial leaders gathered to debate rights, strategy, and how to respond to British punishment of Massachusetts.",
    why: "It was a major step from scattered protest to collective action, laying groundwork for later claims that Americans could govern together.",
    points: [
      "Delegates called for boycotts and asserted colonial rights.",
      "The meeting showed the colonies could cooperate politically.",
      "Philadelphia became a center of revolutionary planning."
    ],
    image: "./assets/timeline-congress.svg",
    imagePosition: "26% 42%"
  },
  {
    year: "1775",
    era: "Before 1776",
    filter: "before",
    title: "Lexington and Concord begin open war",
    summary: "Armed conflict broke out in Massachusetts, turning the imperial crisis into a revolution.",
    what: "British troops marched to seize colonial military supplies. Fighting at Lexington and Concord left both sides with casualties.",
    why: "Once blood had been shed, the question became harder to settle with compromise alone. War made the argument for independence more urgent.",
    points: [
      "Militia resistance proved the colonies would fight.",
      "The war began before independence was formally declared.",
      "Political debate and military struggle were now tied together."
    ],
    image: "./assets/timeline-lexington-concord.svg",
    imagePosition: "52% 44%"
  },
  {
    year: "1776",
    era: "1776",
    filter: "declaration",
    title: "Common Sense and the Declaration make independence public",
    summary: "Thomas Paine's pamphlet and Congress's Declaration turned a growing movement into a clear argument for separation.",
    what: "Early in 1776, Common Sense attacked monarchy and urged independence. On July 4, Congress approved the Declaration's final wording.",
    why: "The Declaration transformed military rebellion into a statement of principles: rights, consent of the governed, and the people's power to alter destructive government.",
    points: [
      "The document listed grievances against King George III.",
      "It announced that the colonies were free and independent states.",
      "Its language shaped later American debates about equality and rights."
    ],
    image: "./assets/timeline-declaration.svg",
    imagePosition: "78% 48%"
  },
  {
    year: "1781",
    era: "After 1776",
    filter: "after",
    title: "Victory at Yorktown makes independence realistic",
    summary: "American and French forces trapped the British army at Yorktown, leading to a decisive surrender.",
    what: "General Cornwallis surrendered in Virginia after a joint American-French campaign cut off escape by land and sea.",
    why: "The Declaration claimed independence in 1776, but victory had to secure it. Yorktown made that claim far more than words on paper.",
    points: [
      "French military support was crucial to the victory.",
      "The surrender weakened British political support for the war.",
      "Independence was becoming a fact, not just an argument."
    ],
    image: "./assets/timeline-yorktown.svg",
    imagePosition: "18% 70%"
  },
  {
    year: "1783",
    era: "After 1776",
    filter: "after",
    title: "Treaty of Paris wins international recognition",
    summary: "Britain formally recognized the United States, ending the Revolutionary War.",
    what: "Peace negotiators signed the Treaty of Paris, acknowledging American independence and setting national boundaries.",
    why: "The treaty turned the Declaration's claim into recognized nationhood. Other countries now had to treat the United States as real.",
    points: [
      "Diplomacy helped translate military success into legal recognition.",
      "The new republic gained territory stretching to the Mississippi River.",
      "The next challenge was how to govern the nation it had created."
    ],
    image: "./assets/timeline-treaty-paris.svg",
    imagePosition: "44% 72%"
  },
  {
    year: "1787",
    era: "After 1776",
    filter: "after",
    title: "Constitutional Convention builds a stronger framework",
    summary: "Leaders met in Philadelphia to replace the weak Articles of Confederation with a new Constitution.",
    what: "Delegates designed a federal system with separation of powers, checks and balances, and representation.",
    why: "The Declaration announced principles. The Constitution engineered institutions meant to secure them more effectively than the Articles had.",
    points: [
      "The convention balanced liberty with the need for workable government.",
      "Debates focused on power, representation, and national stability.",
      "The Constitution answered the practical problem of how a free people would govern themselves."
    ],
    image: "./assets/timeline-convention.svg",
    imagePosition: "70% 74%"
  },
  {
    year: "1791",
    era: "After 1776",
    filter: "after",
    title: "Bill of Rights protects liberties in writing",
    summary: "The first ten amendments added explicit protections for speech, religion, due process, and more.",
    what: "After ratification debates, Congress proposed amendments that became the Bill of Rights.",
    why: "These amendments helped connect the Declaration's claims about rights to enforceable protections inside the constitutional system.",
    points: [
      "Many Americans wanted clearer limits on federal power.",
      "The amendments reassured critics of the Constitution.",
      "They show the long afterlife of Declaration ideals."
    ],
    image: "./assets/timeline-bill-rights.svg",
    imagePosition: "84% 78%"
  }
];

const supabaseUrl = (window.FOUNDING_SIGNAL_SUPABASE_URL || "")
  .replace(/\/+$/, "")
  .replace(/\/rest\/v1$/i, "");
const supabaseAnonKey = window.FOUNDING_SIGNAL_SUPABASE_ANON_KEY || "";
const localPollApiUrl =
  window.FOUNDING_SIGNAL_POLL_API_URL ||
  (window.location.hostname.endsWith("github.io") || supabaseUrl ? "" : "/api/poll");

function setupQuiz() {
  const questionCount = document.querySelector("#question-count");
  const scoreChip = document.querySelector("#score-chip");
  const questionText = document.querySelector("#question-text");
  const answersEl = document.querySelector("#answers");
  const feedback = document.querySelector("#feedback");
  const nextButton = document.querySelector("#next-question");
  const scorePercent = document.querySelector("#score-percent");
  const scoreNote = document.querySelector("#score-note");
  const scoreRing = document.querySelector(".score-ring");

  if (
    !questionCount ||
    !scoreChip ||
    !questionText ||
    !answersEl ||
    !feedback ||
    !nextButton ||
    !scorePercent ||
    !scoreNote ||
    !scoreRing
  ) {
    return;
  }

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function updateScore(final = false) {
    const percent = Math.round((score / questions.length) * 100);
    scoreChip.textContent = `Score ${score}`;
    scorePercent.textContent = `${percent}%`;
    scoreRing.style.setProperty("--score", `${percent}%`);

    if (!final) return;

    if (percent >= 80) {
      scoreNote.textContent = "Strong score. You have the core ideas down.";
    } else if (percent >= 50) {
      scoreNote.textContent = "Good start. Review consent of the governed and the Constitution connection next.";
    } else {
      scoreNote.textContent = "Keep going. The key ideas are rights, consent, independence, and limited power.";
    }
  }

  function chooseAnswer(index) {
    if (answered) return;
    answered = true;

    const item = questions[currentQuestion];
    const buttons = [...document.querySelectorAll(".answer-button")];

    buttons.forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === item.correct) button.classList.add("correct");
      if (buttonIndex === index && index !== item.correct) button.classList.add("wrong");
    });

    if (index === item.correct) score += 1;

    feedback.textContent = item.note;
    nextButton.disabled = false;
    updateScore();
  }

  function renderQuestion() {
    const item = questions[currentQuestion];
    answered = false;
    questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = item.question;
    feedback.textContent = "";
    nextButton.disabled = true;
    nextButton.textContent = currentQuestion === questions.length - 1 ? "See final score" : "Next question";
    answersEl.innerHTML = "";

    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.textContent = answer;
      button.addEventListener("click", () => chooseAnswer(index));
      answersEl.append(button);
    });
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
      return;
    }

    updateScore(true);
    nextButton.disabled = true;
    nextButton.textContent = "Quiz complete";
  });

  renderQuestion();
}

function setupPoll() {
  const pollEl = document.querySelector("#poll-options");
  const resultsLabel = document.querySelector("#results-label");
  const resultsEl = document.querySelector("#poll-results");
  const pulseLayout = pollEl?.closest(".pulse-layout");
  const resultsBoard = resultsEl?.closest(".results-board");

  if (!pollEl || !resultsLabel || !resultsEl) return;

  let currentOptions = pollOptions.map((option) => ({ ...option }));
  let selectedVoteIndex = null;
  let usingSharedResponses = false;

  function totalVotes(options) {
    return options.reduce((sum, option) => sum + option.votes, 0);
  }

  function percentFor(option, total) {
    if (!total) return 0;
    return Math.round((option.votes / total) * 100);
  }

  function normalizeOptions(options) {
    return options
      .map((option) => ({
        label: option.label,
        votes: Number(option.votes) || 0,
        sortOrder: Number(option.sort_order ?? option.sortOrder ?? 0)
      }))
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async function fetchSupabasePoll(functionName, body = {}) {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/${functionName}`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) throw new Error("Supabase poll request failed");
    return response.json();
  }

  function renderPoll() {
    const total = totalVotes(currentOptions);
    const hasVote = selectedVoteIndex !== null;

    pollEl.innerHTML = "";
    resultsEl.innerHTML = "";
    pulseLayout?.classList.toggle("poll-pending", !hasVote);
    if (resultsBoard) resultsBoard.hidden = !hasVote;

    currentOptions.forEach((option, index) => {
      const button = document.createElement("button");
      const isSelected = selectedVoteIndex === index;
      const percent = percentFor(option, total);

      button.className = "poll-choice";
      button.type = "button";
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");
      button.disabled = selectedVoteIndex !== null;
      button.innerHTML = hasVote
        ? `<span>${option.label}</span><strong>${option.votes} votes</strong>`
        : `<span>${option.label}</span>`;

      button.addEventListener("click", () => recordVote(index));

      pollEl.append(button);

      const row = document.createElement("div");
      row.className = "result-row";
      row.innerHTML = `<span>${option.label}</span><strong>${percent}%</strong>`;

      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.setProperty("--value", percent);
      bar.innerHTML = "<span></span>";

      if (hasVote) resultsEl.append(row, bar);
    });

    resultsLabel.textContent = hasVote ? `After your vote / ${total} responses` : "";
  }

  async function loadSharedResponses() {
    if (supabaseUrl && supabaseAnonKey) {
      try {
        currentOptions = normalizeOptions(await fetchSupabasePoll("get_poll_results"));
        usingSharedResponses = true;
        renderPoll();
      } catch {
        usingSharedResponses = false;
        renderPoll();
      }
      return;
    }

    if (!localPollApiUrl) return;

    try {
      const response = await fetch(localPollApiUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("Poll API unavailable");
      const data = await response.json();
      if (!Array.isArray(data.options)) throw new Error("Poll API returned invalid data");
      currentOptions = normalizeOptions(data.options);
      usingSharedResponses = true;
      renderPoll();
    } catch {
      usingSharedResponses = false;
      renderPoll();
    }
  }

  async function recordVote(index) {
    if (selectedVoteIndex !== null) return;

    selectedVoteIndex = index;

    if (supabaseUrl && supabaseAnonKey) {
      try {
        currentOptions = normalizeOptions(
          await fetchSupabasePoll("record_poll_vote", {
            selected_label: currentOptions[index].label,
            page_url: window.location.href,
            user_agent: navigator.userAgent
          })
        );
        usingSharedResponses = true;
        renderPoll();
      } catch {
        selectedVoteIndex = null;
        usingSharedResponses = false;
        renderPoll();
      }
      return;
    }

    currentOptions[index].votes += 1;
    renderPoll();

    if (!localPollApiUrl) return;

    try {
      const response = await fetch(localPollApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: currentOptions[index].label })
      });
      if (!response.ok) throw new Error("Vote was not saved");
      const data = await response.json();
      if (Array.isArray(data.options)) {
        currentOptions = normalizeOptions(data.options);
        usingSharedResponses = true;
        renderPoll();
      }
    } catch {
      usingSharedResponses = false;
      renderPoll();
    }
  }

  renderPoll();
  loadSharedResponses();
}

function setupLab() {
  const historyFilterEl = document.querySelector("#history-filter");
  const historyTimelineEl = document.querySelector("#history-timeline");
  const historyEra = document.querySelector("#history-era");
  const historyYear = document.querySelector("#history-year");
  const historyImage = document.querySelector("#history-image");
  const historyTitle = document.querySelector("#history-title");
  const historySummary = document.querySelector("#history-summary");
  const historyWhat = document.querySelector("#history-what");
  const historyWhy = document.querySelector("#history-why");
  const historyPoints = document.querySelector("#history-points");

  if (
    !historyFilterEl ||
    !historyTimelineEl ||
    !historyEra ||
    !historyYear ||
    !historyImage ||
    !historyTitle ||
    !historySummary ||
    !historyWhat ||
    !historyWhy ||
    !historyPoints
  ) {
    return;
  }

  let activeFilter = "before";
  let activeMomentIndex = historyMoments.findIndex((moment) => moment.filter === activeFilter);

  function renderDetail(moment) {
    historyEra.textContent = moment.era;
    historyYear.textContent = moment.year;
    historyTitle.textContent = moment.title;
    historySummary.textContent = moment.summary;
    historyWhat.textContent = moment.what;
    historyWhy.textContent = moment.why;
    historyImage.style.backgroundImage = `linear-gradient(180deg, rgba(12, 18, 32, 0.08), rgba(12, 18, 32, 0.7)), url("${moment.image}")`;
    historyImage.style.backgroundPosition = moment.imagePosition;

    historyPoints.innerHTML = "";
    moment.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      historyPoints.append(item);
    });
  }

  function renderTimeline() {
    historyTimelineEl.innerHTML = "";

    historyMoments.forEach((moment, index) => {
      const button = document.createElement("button");
      button.className = "timeline-event";
      button.type = "button";
      button.hidden = moment.filter !== activeFilter;
      button.setAttribute("aria-pressed", index === activeMomentIndex ? "true" : "false");
      button.innerHTML = `
        <span class="timeline-thumb" style="background-image: url('${moment.image}')" aria-hidden="true"></span>
        <span class="timeline-copy">
          <span class="timeline-date">${moment.year}</span>
          <span class="timeline-title">${moment.title}</span>
          <span class="timeline-summary">${moment.summary}</span>
        </span>
      `;

      button.addEventListener("click", () => {
        activeMomentIndex = index;
        renderTimeline();
        renderDetail(historyMoments[activeMomentIndex]);
      });

      historyTimelineEl.append(button);
    });
  }

  function renderFilters() {
    historyFilterEl.innerHTML = "";

    historyFilters.forEach((filter) => {
      const button = document.createElement("button");
      button.className = "history-filter-button";
      button.type = "button";
      button.setAttribute("aria-pressed", filter.id === activeFilter ? "true" : "false");
      button.textContent = filter.label;

      button.addEventListener("click", () => {
        activeFilter = filter.id;
        activeMomentIndex = historyMoments.findIndex((moment) => moment.filter === activeFilter);
        renderFilters();
        renderTimeline();
        renderDetail(historyMoments[activeMomentIndex]);
      });

      historyFilterEl.append(button);
    });
  }

  renderFilters();
  renderTimeline();
  renderDetail(historyMoments[activeMomentIndex]);
}

function updateCountdown() {
  const countdown = document.querySelector("#countdown");
  if (!countdown) return;

  const target = new Date("2026-07-04T00:00:00-05:00");
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    countdown.textContent = "Today";
    return;
  }

  const days = Math.ceil(diff / 86_400_000);
  countdown.textContent = days.toLocaleString();
}

setupQuiz();
setupPoll();
setupLab();
updateCountdown();
