const questions = [
    {
        questions: "1) Which type of JavaScript language is",
        answers: [
            { text: "Object - Oriented", correct: false },
            { text: "Object - Based", correct: true },
            { text: "Assembly - language", correct: false },
            { text: "High - level", correct: false },

        ]
    },
    {
        questions: " 2)Which one of the following also known as Conditional Expression:",
        answers: [
            { text: "Alternative to if-else", correct: false },
            { text: "Switch statement", correct: false },
            { text: "If-then-else statement", correct: false },
            { text: "immediate if", correct: true },

        ]
    },
    {
        questions: "3) In JavaScript, what is a block of statement?:",
        answers: [
            { text: "Conditional block", correct: false },
            { text: "block that combines a number of statements into a single compound statement", correct: true },
            { text: "both conditional block and a single statement", correct: false },
            { text: "block that contains a single statement", correct: false },
        ]
    },
    {
        questions: "4) When interpreter encounters an empty statements, what it will do:",
        answers: [
            { text: "Shows a warning", correct: false },
            { text: "Prompts to complete the statement", correct: false },
            { text: "Throws an error", correct: false },
            { text: "Ignores the statements", correct: true },
        ]
    },
    {
        questions: '5) The "function" and  "var" are known as:',
        answers: [
            { text: "Keywords", correct: false },
            { text: "Data types", correct: false },
            { text: "Declaration statements", correct: true },
            { text: "Prototypes", correct: false },
        ]
    }
];
const questionsElement = document.getElementById("question");
const answersBtns = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQusetionIndex = 0;
let score = 0;
function startQuiz() {
    currentQusetionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQusetion = questions[currentQusetionIndex];
    let questionNo = currentQusetionIndex + 1;
    questionsElement.innerHTML = questionNo + "." + currentQusetion.questions;

    currentQusetion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answersBtns.appendChild(button);
        if (answers.correct) {
            button.dataset.correct= answers.correct
        }
        button.addEventListener("click",selectAnsewer)
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answersBtns.firstChild) {
        answersBtns.removeChild(answersBtns.firstChild);
    }
}
function selectAnsewer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionsElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display="block"
}

function handleNextButton() {
    currentQusetionIndex++;
    if (currentQusetionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if (currentQusetionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();






