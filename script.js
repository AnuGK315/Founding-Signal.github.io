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

let currentQuestion = 0;
let score = 0;
let answered = false;

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
  pollEl.innerHTML = "";
  pollOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "poll-choice";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `<span>${option.label}</span><strong>${option.votes}</strong>`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".poll-choice").forEach((choice) => {
        choice.setAttribute("aria-pressed", "false");
      });
      option.votes += 1;
      button.setAttribute("aria-pressed", "true");
      renderPoll();
      const selected = [...document.querySelectorAll(".poll-choice")].find((choice) =>
        choice.textContent.includes(option.label)
      );
      selected?.setAttribute("aria-pressed", "true");
    });
    pollEl.append(button);
  });
}

renderQuestion();
renderPoll();
updateCountdown();
