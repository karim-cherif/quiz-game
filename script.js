const quizData = [
  {
    question: "What is the central concept of Industry 4.0?",
    options: [
      "Automation and data exchange in manufacturing technologies",
      "Traditional manufacturing methods",
      "Handcrafting techniques",
      "None of the above",
    ],
    answer: "Automation and data exchange in manufacturing technologies",
  },
  {
    question: "Which technology is NOT typically associated with Industry 4.0?",
    options: [
      "Artificial Intelligence",
      "Blockchain",
      "Steam engines",
      "Internet of Things (IoT)",
    ],
    answer: "Steam engines",
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", selectOption);
    optionsElement.appendChild(button);
  });
}

function selectOption(e) {
  const selectedOption = e.target.innerText;
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
    resultElement.innerText = "Correct!";
  } else {
    resultElement.innerText = "Incorrect!";
  }
  disableOptions();
}

function disableOptions() {
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.disabled = true;
    if (button.innerText === quizData[currentQuestion].answer) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    resultElement.innerText = "";
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.innerText = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
  optionsElement.innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

loadQuestion();
