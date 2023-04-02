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
    explanation: "Since the narrator's mother and sister were hurtful to the narrator, their relationship with the narrator is hostile. Therefore, the reader can infer that inimical means hostile. Maledictions are calling curses on someone or telling lies about someone. Frequently cursing someone or telling lies about them is certain to make a relationship hostile, or inimical.",
},
{
    question: "As used in paragraph 2, which is the best synonym for invectives?",
    a: "profanity",
    b: "words",
    c: "insults",
    d: "names",
    correct: "c",
    explanation: "In paragraph 2, the mother is saying something mean to the narrator, we can infer that invectives are abusive or rude expressions. Insults are offensive remarks. Since abusive or rude expressions are offensive remarks, insults is a good synonym for invectives",
},
{
    question: "'The professor derides me for my poor performance.' Which of the following is the best way to rewrite the above sentence (from paragraph 7) while keeping its original meaning the same?",
    a: "The professor announces my poor performance.",
    b: "The professor gives me a failing grade for my poor performance",
    c: "The professor is in disbelief due to my poor performance.",
    d: "The professor laughs mockingly at my poor performance",
    correct: "d",
    explanation: "In paragraph 6, since the professor makes fun of the narrator's ignorance, we can infer that derides means mocks or ridicules. The sentence The professor laughs mockingly at my poor performance best retains the meaning of the original sentence.",
},
{
    question: "Which of the following words from the story has/have a negative connotation?\nI. deprecated (paragraph 2)\nII. alacrity (paragraph 5)\nIII. pugnacious (paragraph 7)",
    a: "I only",
    b: "I and III",
    c: "II and III",
    d: "I, II, and III",
    correct: "b",
    explanation: "In paragraph 2, since the mother has called the sister terrible things, we can infer that deprecated means to belittle. This has a negative connotation, so it supports option (I). In paragraph 5, the author is describing a recurring dream. Since the woman is smiling and shouting the narrator's name, she is encouraging the narrator to take her hand. We can infer from this that alacrity is willingness. Willingness to help has a positive connotation, so this eliminates option (II). In paragraph 7, since we know the relationship between the women was belligerent, we can infer that pugnacious means belligerent. This has a negative connotation, so it supports option (III)",
},
{
    question:"If the professor in the narrator's dream (paragraph 7) represented someone in her life, who would that person most likely be, and why?",
    a: "the mother, because she was described in the passage as mean-spirited",
    b: "the sister, because she was described in the passage as dithering",
    c: "the sister, because she was described in the passage as dithering",
    d: "herself, because she was hyper-aware of her own problems",
    correct: "a",
    explanation: "The mother is described as mean-spirited, calling one daughter names and telling the other that she has no talent. Later, the professor in the narrator's dream also behaves in a mean-spirited way, making fun of the narrator in front of the class. The professor most likely represents the mother.",
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

