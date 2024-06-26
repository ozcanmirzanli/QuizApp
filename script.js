// @ts-nocheck
let questions = [
  {
    question: "How long can honey be preserved?",
    answer_1: "Up to 10 years",
    answer_2: "Up to 1 year",
    answer_3: "Indefinitely",
    answer_4: "Up to 5 years",
    correct_answer: 3,
  },
  {
    question: "How many hearts does an octopus have?",
    answer_1: "1",
    answer_2: "3",
    answer_3: "2",
    answer_4: "4",
    correct_answer: 2,
  },
  {
    question: "Which is longer on Venus, a day or a year?",
    answer_1: "A day",
    answer_2: "A year",
    answer_3: "They are the same length",
    answer_4: "It changes with Venus' orbital position",
    correct_answer: 1,
  },
  {
    question: "Which of the following is considered a berry?",
    answer_1: "Strawberry",
    answer_2: "Raspberry",
    answer_3: "Banana",
    answer_4: "Apple",
    correct_answer: 3,
  },
  {
    question: "What was the duration of the shortest war in history?",
    answer_1: "38 minutes",
    answer_2: "2 hours",
    answer_3: "1 day",
    answer_4: "45 minutes",
    correct_answer: 1,
  },
  {
    question:
      "Which animal is known to have the most powerful bite in the animal kingdom?",
    answer_1: "Great White Shark",
    answer_2: "African Lion",
    answer_3: "Saltwater Crocodile",
    answer_4: "Grizzly Bear",
    correct_answer: 3,
  },
  {
    question: "What is the primary component of the Sun?",
    answer_1: "Liquid Lava",
    answer_2: "Hydrogen",
    answer_3: "Helium",
    answer_4: "Iron",
    correct_answer: 2,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answer_1: "Venus",
    answer_2: "Saturn",
    answer_3: "Mars",
    answer_4: "Jupiter",
    correct_answer: 3,
  },
  {
    question: "What is the tallest breed of dog in the world?",
    answer_1: "Great Dane",
    answer_2: "German Shepherd",
    answer_3: "Irish Wolfhound",
    answer_4: "Mastiff",
    correct_answer: 1,
  },
  {
    question: "Which country has the most natural lakes?",
    answer_1: "United States",
    answer_2: "Finland",
    answer_3: "Canada",
    answer_4: "Russia",
    correct_answer: 3,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio("sounds/success.flac");
let AUDIO_FAIL = new Audio("sounds/wrong.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = `${questions.length}`;

  showQuestion();
}

function showQuestion() {
  if (quizIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function quizIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.getElementById("end-screen").style.display = "";
  document.getElementById("question-body").style.display = "none";

  document.getElementById("amount-of-questions").innerHTML = questions.length;
  document.getElementById("right-questions").innerHTML = rightQuestions;
  document.getElementById("header-image").src = "img/win.png";
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerText = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
  document.getElementById("question-text").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  if (document.getElementById("next-button").disabled === false) {
    return; // If the next button is enabled, it means an answer was already selected.
  }

  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let iDofRightAnswer = `answer_${question["correct_answer"]}`;

  successAndFailure(selectedQuestionNumber, iDofRightAnswer, selection);

  document.getElementById("next-button").disabled = false;

  disableAnswerButtons(true);
}

function successAndFailure(selectedQuestionNumber, iDofRightAnswer, selection) {
  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
    AUDIO_SUCCESS.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    // prettier-ignore
    document.getElementById(iDofRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
}

function disableAnswerButtons(disable) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer_${i}`).disabled = disable;
  }
}

function rightAnswerSelected(selectedQuestionNumber) {
  let question = questions[currentQuestion];
  return selectedQuestionNumber == question["correct_answer"];
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  resetAnswerButtons();
  document.getElementById("next-button").disabled = true;
}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-danger", "bg-success");
  }
}

function restartQuiz() {
  document.getElementById("header-image").src = "img/quiz.jpg";
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("question-body").style = "";
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
