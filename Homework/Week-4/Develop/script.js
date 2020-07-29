// declares all variables for the JavaScript
var questionList = document.querySelector("#question-list");
var highscoreform = document.querySelector("#highscoreform");
var currentQuestion = document.querySelector("#current-question");
var currentScore = document.querySelector("#current-score");
var timeE1 = document.querySelector(".time");
var currentQuestionNumber = 0;
var highScores = [];
var QuestionsAndAnswers = [];

// Declares question and answer variables

QuestionsAndAnswers.push(
  "What does CSS stand for?",
  "A; Cascading Style Sheets",
  "B; Cool Style Sheets",
  "C; Crazy Style Sheets",
  "D; Circus Super Sheets"
);
QuestionsAndAnswers.push(
  "What does HTML stand for?",
  "A; Hyperactive Telephone Mark Line",
  "B; Hypertext Markup Language",
  "C; Hello Text Markup Life",
  "D; HyperText Marking Language"
);
QuestionsAndAnswers.push(
  "What Does JS stand for?",
  "A; Javascrap",
  "B; Javasuper",
  "C; Javascript",
  "D; Jamsongs"
);

// start the timer
timeStart();

// First function call to initiate quiz
renderTestQuestion();

// Declared variables

var Answer_Key = [0, 1, 2];
var Users_Answers = [];
var secondsLeft = 60;

// Starts timer

function timeStart() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeE1.textContent = secondsLeft + " seconds";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log(hi);
    }
  }, 1000);
}

// Renders the questions and answers for the current question

function renderTestQuestion() {
  questionList.innerHTML = "";
  currentQuestion.textContent = QuestionsAndAnswers[currentQuestionNumber * 5];
  var li = document.createElement("li");
  li.textContent = QuestionsAndAnswers[currentQuestionNumber * 5 + 1];
  li.setAttribute("data-index", 0);
  var button = document.createElement("button");
  button.textContent = "Choose A";
  li.appendChild(button);
  questionList.appendChild(li);
  var li = document.createElement("li");
  li.textContent = QuestionsAndAnswers[currentQuestionNumber * 5 + 2];
  li.setAttribute("data-index", 1);
  var button = document.createElement("button");
  button.textContent = "Choose B";
  li.appendChild(button);
  questionList.appendChild(li);
  var li = document.createElement("li");
  li.textContent = QuestionsAndAnswers[currentQuestionNumber * 5 + 3];
  li.setAttribute("data-index", 2);
  var button = document.createElement("button");
  button.textContent = "Choose C";
  li.appendChild(button);
  questionList.appendChild(li);
  var li = document.createElement("li");
  li.textContent = QuestionsAndAnswers[currentQuestionNumber * 5 + 4];
  li.setAttribute("data-index", 3);
  var button = document.createElement("button");
  button.textContent = "Choose D";
  li.appendChild(button);
  questionList.appendChild(li);
}

// This function redirects the user to the highscores.html page after the quiz is completed

function renderHighScores() {
  window.location.href = "./highscores.html";
  // Investigate why this next line is not executing
  currentScore.textContent = "hello";
}

// gets the users chosen answer for current question and keeps track of their score.

questionList.addEventListener("click", function (event) {
  var element = event.target;
  var numCorrect = 0;
  var Question_count = QuestionsAndAnswers.length / 5;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    Users_Answers.push(index);
    if (
      Users_Answers[currentQuestionNumber] == Answer_Key[currentQuestionNumber]
    ) {
      alert("Correct!");
      numCorrect += 1;
    } else {
      alert("Incorrect!");
      secondsLeft -= 15;
    }
  }

  // incrementing the question counter.

  currentQuestionNumber += 1;

  // if its not the end of the tests sends user to next questions otherwise it calculates high scores and sends user to highscores.html

  if (currentQuestionNumber < Question_count) {
    renderTestQuestion();
  } else {
    highScores.push(secondsLeft);
    alert("your score: " + highScores);
    renderHighScores();
  }
});
