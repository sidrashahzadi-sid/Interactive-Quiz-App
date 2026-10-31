const questions = [
    {
        question: "Which Language is used to structure webpages?",
        options: ["HTML", "CSS", "JAVASCRIPT", "Python"],
        correctAnswer: "HTML",
        explanation: "HTML provides the structure of webpages."
    },
    {
        question: "Which CSS property changes text colour?",
        options: ["font-size", "background", "color", "margin"],
        correctAnswer: "color",
        explanation: "The color property controls the foreground text colour."
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "let", "static", "define"],
        correctAnswer: "let",
        explanation: "Let declares a block-scoped variable that can be reassigned."
    },
    {
        question: "Which symbol is used for a single-line comment in javascript?",
        options: ["<!-->", "//", "**", "##"],
        correctAnswer: "//",
        explanation: "Two forward slashes begin a single-line JavaScript comment."
    },
    {
        question: "Which HTML element creates a hyper link?",
        options: ["img", "div", "a", "p"],
        correctAnswer: "a",
        explanation: "The anchor element creates hyperlinks."
    },
    {
        question: "Which CSS property adds space inside an element's border?",
        options: ["margin", "padding", "gap", "outline"],
        correctAnswer: "padding",
        explanation: "Padding creates space between the content and its border."
    },
    {
        question: "Which method selects an element by its ID in JavaScript?",
        options: ["getElementsByClassName()", "querySelectorAll()", "getElementById()", "getElementsByTagName()"],
        correctAnswer: "getElementById()",
        explanation: "getElementById selects an element using its ID."
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Method", "Digital Ordinance Model", "Document Orientation Mode"],
        correctAnswer: "Document Object Model",
        explanation: "The DOM represents the page as objects that JavaScript can access and manipulate."
    },
    {
        question: "Which JavaScript method adds an item to the end of an array?",
        options: ["pop()", "shift()", "push()", "slice()"],
        correctAnswer: "push()",
        explanation: "Push adds one or more items to the end of an array."
    },
    {
        question: "Which HTML attribute is used to provide alternative text for an image?",
        options: ["title", "alt", "src", "href"],
        correctAnswer: "alt",
        explanation: "The alt attribute provides alternative text for image."
    },
];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
const welcomeScreen = document.querySelector(".welcome-section");
const quizScreen = document.querySelector(".quiz-section");
const resultScreen = document.querySelector(".result-screen");
const startButton = document.querySelector(".quiz-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const answerOptions = document.querySelector(".answer-options");
const progressFill = document.querySelector(".progress-fill");
const finalScore = document.getElementById("final-score");
const performanceMessage = document.querySelector(".performance-message");
function startQuiz(){
    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";
    loadQuestion();
}
startButton.addEventListener("click", startQuiz);
function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;

progressFill.style.width = `${progressPercentage}%`;
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

scoreDisplay.textContent = `Score: ${score}`;
    answerOptions.innerHTML = "";
    currentQuestion.options.forEach(function(option){
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function(){
            if (selectedAnswer !== null){
                return;
            }
            selectedAnswer = option;
            button.classList.add("selected");
        });
        answerOptions.appendChild(button);
    });
}
function checkAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer first!");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    scoreDisplay.textContent = `Score: ${score}`;

    currentQuestionIndex++;
    selectedAnswer = null;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}
nextButton.addEventListener("click", checkAnswer);
function showResults() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    finalScore.textContent = `${score} / ${questions.length}!`;

if (score === 10) {
    performanceMessage.textContent = "Perfect Score! Excellent Work!";
} else if (score >= 7) {
performanceMessage.textContent = "Great job! You did it really well!";
}
else if (score >= 5){
performanceMessage.textContent = "Good Effort! Keep Practicing!";
} else {
performanceMessage.textContent = "Keep learning! You can do better!";
}
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    resultScreen.style.display = "none";
    welcomeScreen.style.display = "block";

    scoreDisplay.textContent = `Score: ${score}`;
}
restartButton.addEventListener("click", restartQuiz)