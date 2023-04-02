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
    question: "What animal family does the Giant Panda belong to?",
    a: "The Ape Family",
    b: "The Bear Family",
    c: "The Panda Family",
    d: "It doesn't say in the story",
    correct: "b",
},
{
    question: "Why is the Giant Panda endangered?",
    a: "Its habitat and food source are disappearing",
    b: "Other animals prey on it",
    c: "Its habitat is being taken over by otheer animals",
    d: "It is famous among hunters, therefor being a target of hunting",
    correct: "a",
},
{
    question: "What does 'endangered' mean?",
    a: "A danger to other animals",
    b: "A danger to humans",
    c: "Threatened or in danger of dying out",
    d: "Maintain or keep alive",
    correct: "c",
},
{
    question: "What is the Giant Panda's habitat?",
    a: "Jungles", 
    b: "Mountain Forests",
    c: "China",
    d: "Rain Forests",
    correct: "b",
},
{
    question: "Which of these actions will help preserve the Giant Pandas?",
    a: "Build more roads so people can go and see them",
    b: "Keep their habitat from being disturbed",
    c: "Move all the pandas to zoos",
    d: "Visit them in their habitats and make friends with them",
    correct: "b",
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

    

