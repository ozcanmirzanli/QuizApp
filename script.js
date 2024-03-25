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
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = `${questions.length}`;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question-text").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let iDofRightAnswer = `answer_${question["correct_answer"]}`;

  if (selectedQuestionNumber == question["correct_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(iDofRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

init();
