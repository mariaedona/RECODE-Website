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
    question: "Which of the following is an example of a Nut?",
    a: "Brazil Nuts",
    b: "Acorns",
    c: "Cashews",
    d: "Peanuts",
    correct: "b",
    explanation: "In paragraph 1, we see that Brazil Nuts, Cashews, and Peanuts are not examples of nuts. Therefore, the answer is (B) Acorns.",
},
{
    question: "According to the passage, which of the following statements is true?",
    a: "True nuts do not open naturally.",
    b: "Cashews are true nuts. ",
    c: "A nut is not a fruit.",
    d: "A nut has multiple seeds",
    correct: "a",
    explanation: "In paragraph 2, the passage states that a true nut has a hard shell, and can only be opened when cracked. Therefore (A) is true.",
},
{
    question: "What is the main idea of the third paragraph?",
    a: "Many cooks do not understand what nuts are. ",
    b: "Seeds are nuts, but nuts are not seeds. ",
    c: " Nuts and seeds are small. ",
    d: "In normal speech, some seeds are called nuts. ",
    correct: "d",
    explanation: "Paragraph 3 states that “…English speakers often call seeds, “nuts.” Therefore (D) is the main idea.",
},
{
    question:"In the last paragraph, inedible most closely means... ",
    a: "not able to be eaten ",
    b: "familiar",
    c: "unbelievable",
    d: "not good for health",
    correct: "a",
    explanation: "Inedible food is food that is unable to be eaten. Therefore (A) is the answer.",
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
