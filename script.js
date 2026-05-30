const questions = [
  {
    question: "What date is most associated with the adoption of the Declaration of Independence?",
    answers: ["July 4, 1776", "September 17, 1787", "April 19, 1775", "July 2, 1788"],
    correct: 0,
    note: "July 4, 1776 is the date remembered as Independence Day because Congress approved the Declaration's final wording then."
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
  }
];

const pollOptions = [
  { label: "Rights", votes: 38 },
  { label: "Self-government", votes: 28 },
  { label: "Independence Day", votes: 24 },
  { label: "Checks on power", votes: 18 }
];

const scenarioChoices = [
  {
    label: "Citizens attend a town hall, challenge a proposal, and vote in the next election",
    correct: true,
    note: "This matches consent of the governed because people are actively shaping and checking public power."
  },
  {
    label: "A leader keeps power permanently because experience matters more than elections",
    correct: false,
    note: "The Declaration rejects permanent unchecked power. Legitimate authority must remain accountable to the people."
  },
  {
    label: "A court writes every law without input from voters or representatives",
    correct: false,
    note: "Courts matter, but consent is broader than one institution. Self-government depends on public participation and representation."
  }
];

const principleCards = [
  {
    label: "Natural rights",
    summary: "The Declaration says rights belong to people first, and government exists to protect them.",
    idea: "Life, liberty, and the pursuit of happiness are described as unalienable rights.",
    action: "People defend these rights through speech, due process, voting, juries, and public advocacy.",
    impact: "This keeps government focused on protecting human dignity instead of creating rights only when convenient."
  },
  {
    label: "Consent",
    summary: "Government is just only when its power comes from the people it governs.",
    idea: "Public consent is the source of legitimate authority.",
    action: "Elections, petitions, town halls, public debate, and peaceful protest all feed citizen input into the system.",
    impact: "It creates a feedback loop where leaders must answer to the public instead of ruling by force."
  },
  {
    label: "Checks and balances",
    summary: "The Constitution later turns Declaration ideals into structures that limit power.",
    idea: "The Declaration states the principles; the Constitution engineers the guardrails.",
    action: "Branches check one another while voters periodically replace leaders.",
    impact: "This reduces the risk of tyranny by making it harder for any one group to control everything at once."
  }
];

const pollStorageKey = "pulse250-vote";

let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedPrinciple = 0;

const questionCount = document.querySelector("#question-count");
const scoreChip = document.querySelector("#score-chip");
const questionText = document.querySelector("#question-text");
const answersEl = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-question");
const scorePercent = document.querySelector("#score-percent");
const scoreNote = document.querySelector("#score-note");
const scoreRing = document.querySelector(".score-ring");
const countdown = document.querySelector("#countdown");
const pollEl = document.querySelector("#poll-options");
const pollNote = document.querySelector("#poll-note");
const resultsLabel = document.querySelector("#results-label");
const scenarioOptions = document.querySelector("#scenario-options");
const scenarioFeedback = document.querySelector("#scenario-feedback");
const principleTabs = document.querySelector("#principle-tabs");
const principleTitle = document.querySelector("#principle-title");
const principleSummary = document.querySelector("#principle-summary");
const principleIdea = document.querySelector("#principle-idea");
const principleAction = document.querySelector("#principle-action");
const principleImpact = document.querySelector("#principle-impact");

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

function updateScore(final = false) {
  const percent = Math.round((score / questions.length) * 100);
  scoreChip.textContent = `Score ${score}`;
  scorePercent.textContent = `${percent}%`;
  scoreRing.style.setProperty("--score", `${percent}%`);

  if (!final) return;

  if (percent >= 80) {
    scoreNote.textContent = "Strong pulse. You can lead the peer conversation on rights and consent.";
  } else if (percent >= 50) {
    scoreNote.textContent = "Good pulse. Review consent of the governed and the Constitution connection next.";
  } else {
    scoreNote.textContent = "Starting pulse. The dashboard shows exactly where to build your Declaration knowledge.";
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  updateScore(true);
  nextButton.disabled = true;
  nextButton.textContent = "Pulse complete";
});

function updateCountdown() {
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

function renderPoll() {
  const savedVote = window.localStorage.getItem(pollStorageKey);
  pollEl.innerHTML = "";
  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  pollOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "poll-choice";
    button.type = "button";
    const isSelected = savedVote === String(index);
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    button.disabled = savedVote !== null;
    const percent = Math.round((option.votes / totalVotes) * 100);
    button.innerHTML = `<span>${option.label}</span><strong>${percent}%</strong>`;
    button.addEventListener("click", () => {
      if (window.localStorage.getItem(pollStorageKey) !== null) return;
      option.votes += 1;
      window.localStorage.setItem(pollStorageKey, String(index));
      renderPoll();
    });
    pollEl.append(button);
  });

  if (savedVote !== null) {
    const picked = pollOptions[Number(savedVote)];
    pollNote.textContent = `Vote recorded: ${picked.label}. Your browser will not count another vote in this snapshot.`;
    resultsLabel.textContent = "Live pulse after your one recorded vote";
    return;
  }

  pollNote.textContent = "Your device gets one vote, so the pulse works more like a real class snapshot.";
  resultsLabel.textContent = "Sample benchmark results";
}

function renderScenarioChoices() {
  scenarioOptions.innerHTML = "";
  scenarioFeedback.textContent =
    "Choose the response that most clearly shows government getting its just power from the people.";

  scenarioChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "scenario-button";
    button.type = "button";
    button.textContent = choice.label;
    button.addEventListener("click", () => {
      document.querySelectorAll(".scenario-button").forEach((item) => {
        item.disabled = true;
        if (item.textContent === choice.label) {
          item.classList.add(choice.correct ? "correct" : "wrong");
        }
      });

      if (!choice.correct) {
        const correctIndex = scenarioChoices.findIndex((item) => item.correct);
        const correctButton = document.querySelectorAll(".scenario-button")[correctIndex];
        correctButton?.classList.add("correct");
      }

      scenarioFeedback.textContent = choice.note;
    });
    scenarioOptions.append(button);
  });
}

function renderPrincipleTabs() {
  principleTabs.innerHTML = "";

  principleCards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "principle-tab";
    button.type = "button";
    button.textContent = card.label;
    button.setAttribute("aria-pressed", index === selectedPrinciple ? "true" : "false");
    button.addEventListener("click", () => {
      selectedPrinciple = index;
      renderPrincipleTabs();
      renderPrinciplePanel();
    });
    principleTabs.append(button);
  });
}

function renderPrinciplePanel() {
  const card = principleCards[selectedPrinciple];
  principleTitle.textContent = card.label;
  principleSummary.textContent = card.summary;
  principleIdea.textContent = card.idea;
  principleAction.textContent = card.action;
  principleImpact.textContent = card.impact;
}

renderQuestion();
renderPoll();
renderScenarioChoices();
renderPrincipleTabs();
renderPrinciplePanel();
updateCountdown();
