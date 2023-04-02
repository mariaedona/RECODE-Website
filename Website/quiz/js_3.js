//for navbar mobile view
var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }

//for quiz
const quizData = [
{
    question: "The Writer's purpose of writing the text is ___ crispy fried shrimps",
    a: "to explain the steps to make...",
    b: "to inform of the way to enjoy...",
    c: "to describe ingredients to make...",
    d: "to relate one's experience when making...",
    correct: "a",
    explanation: "The author thoroughly explains each step in making crispy fried shrips in the passage, therefore the answer is (A).",
},
{
    question: "When can the shrimp dip into the whisked egg?",
    a: "Before mixing them with grated ginger",
    b: "Before rolling them on the mixture of corn flour",
    c: "After resting the ginger-mixed shrimps for 10 minutes",
    d: "After mixing them with corn flour, salt, and pepper",
    correct: "c",
    explanation: "In step 2, it says to mix the shrimp and grated ginger and leave it for 10 minutes, and in step 4, we are now able to dip the shrimp into the whisked egg. Therefore (C) is the answer.",
},
{
    question: "What can you conclude from the text?",
    a: "We can use any kinds of flour to make the dish",
    b: "It is tatstier to eat the shrimp with chili sauce",
    c: "The shrimp is marinated with salt and pepper",
    d: "It is better to eat the shrimps when they are cold",
    correct: "b",
    explanation: "The passage does not imply that we can use different kinds of flour to make the dish, making (A) incorrect. The passage does not state that the shrimp is marinated with salt and pepper, which makes (B) incorrect. And the passage does not hint that the shrimps are better to eat when they are cold. Therefore, the correct answer is (B).",
}, 
{
    question:"'... and stir them thoroughly' (step 3). 'Thoroughly' is similar in meaning to...",
    a: "Efficiently",
    b: "Gradually",
    c: "Completely",
    d: "Slowly",
    correct: "c",
    explanation: "Thorough means 'with nothing left out or omitted; complete' Therefore (C) is the answer. ",
},
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const expl = document.getElementById("explanation");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    expl.style.visibility = 'hidden'
    expl.innerText = currentQuizData.explanation;
}; 

const showExpl = () => {
    expl.style.visibility = 'visible'
    expl.innerText = currentQuizData.explanation;

    };

loadQuiz();
nextButton.style.visibility = 'hidden';
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    submitButton.style.visibility = 'hidden'
    nextButton.style.visibility = 'visible'
    showExpl();
    }
    }
);

nextButton.addEventListener("click", () => {
    if (currentQuiz < quizData.length) loadQuiz();
    else if (score >= 3) {
        quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2>  
    .ending {
        background: #fff;
        border-style: groove;
        text-align: center;
        padding: 5px;
    }
    .great {
        height: auto;
        width: 200px;
    }
    </style>`
    } else {
        quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Better luck Next time! <br> <img src="pictures/2-1.png" class="good"> </h2> 
    <style> 
    .ending {
        background: #fff;
        border-style: groove;
        text-align: center;
        padding: 5px;
    }
    .good {
        height: auto;
        width: 200px;
    }
    </style>`
    }
    submitButton.style.visibility = 'visible'
    nextButton.style.visibility = 'hidden'
});

