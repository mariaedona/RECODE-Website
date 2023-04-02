const startingMinutes = 0;

let time = startingMinutes + 60;

const countdownEl = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds:seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0){
        clearInterval(updateCountdown);
        countdownEl.innerHTML = "0:00";
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <a style="text-decoration: none;" href="../index.html"><button>Home</button></a>
        `
    }
}


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
    question: "Which is most likely to make a relationship inimical (paragraph 1)?",
    a: "heated debates",
    b: "great pathos",
    c: "magnanimous gestures",
    d: "frequent maledictions",
    correct: "d",
},
{
    question: "As used in paragraph 2, which is the best synonym for invectives?",
    a: "profanity",
    b: "words",
    c: "insults",
    d: "names",
    correct: "c",
},
{
    question: "'The professor derides me for my poor performance.' Which of the following is the best way to rewrite the above sentence (from paragraph 7) while keeping its original meaning the same?",
    a: "The professor announces my poor performance.",
    b: "The professor gives me a failing grade for my poor performance",
    c: "The professor is in disbelief due to my poor performance.",
    d: "The professor laughs mockingly at my poor performance",
    correct: "d",
},
{
    question: "Which of the following words from the story has/have a negative connotation? I. deprecated (paragraph 2), II. alacrity (paragraph 5). III. pugnacious (paragraph 7)",
    a: "I only",
    b: "I and III",
    c: "II and III",
    d: "I, II, and III",
    correct: "b",
},
{
    question:"If the professor in the narrator's dream (paragraph 7) represented someone in her life, who would that person most likely be, and why?",
    a: "the mother, because she was described in the passage as mean-spirited",
    b: "the sister, because she was described in the passage as dithering",
    c: "the sister, because she was described in the passage as dithering",
    d: "herself, because she was hyper-aware of her own problems",
    correct: "a",
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
    }
    }
);

nextButton.addEventListener("click", () => {
    if (currentQuiz < quizData.length) loadQuiz();
    else if (score >= 3) {
        quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2> 
    <style> 
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

