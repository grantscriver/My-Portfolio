var questionList = document.querySelector("#question-list");
var currentQuestion = document.querySelector("#current-question");

var currentQuestionNumber = 0;

var QuestionsAndAnswers = [];

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

var Answer_Key = [0, 1, 2];
var Users_Answers = [];

renderTestQuestion();

// paint the page with the next question
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

questionList.addEventListener("click", function (event) {
  var element = event.target;
  var Question_count = QuestionsAndAnswers.length / 5;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    Users_Answers.push(index);
    if (
      Users_Answers[currentQuestionNumber] == Answer_Key[currentQuestionNumber]
    ) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }
  currentQuestionNumber += 1;
  // put if statement that checks if we are done with the questions
  if (currentQuestionNumber < Question_count) {
  }
  renderTestQuestion();
});
