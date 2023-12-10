

const questionNumber = document.querySelector(".question-num");
const questionText = document.querySelector(".question-bx");
const questionOption = document.querySelector(".option-cont");
const answerIndicatorCont = document.querySelector(".ans-indicator");
const homeBx = document.querySelector(".home");
const quizBx = document.querySelector(".quiz");
const resultBx = document.querySelector(".result");

let questionCounter = 0;
let currentQuestion;
let availQuestion = [];
let availOptions = [];
let correctAns = 0;
let attempt = 0;


function setAvailableQuestion() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion;i++){
        availQuestion.push(quiz[i]);
    }
}


function getNewQuestion(){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
    
    const questionIndex = availQuestion[Math.floor(Math.random() * availQuestion.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    
    const index1 = availQuestion.indexOf(questionIndex);
    availQuestion.splice(index1,1);

    const optionLen = currentQuestion.options.length;

    for(let i = 0; i < optionLen; i++){
        availOptions.push(i);
    }

    questionOption.innerHTML = '';
    let animationDelay = 0.15;

    for(let i = 0; i < optionLen; i++){
        const optionIndex = availOptions[Math.floor(Math.random() * availOptions.length)];
        const index2 = availOptions.indexOf(optionIndex);
        availOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "options";
        questionOption.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }


    questionCounter++;

}

function getResult(element) {
    const id = parseInt(element.id);

    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        updateAnsIndicator("correct");
        correctAns++;
        
    }
    else {
        element.classList.add("wrong");
        updateAnsIndicator("wrong");

        const optionLen = questionOption.children.length;
        for(let i = 0; i < optionLen; i++) {
            if(parseInt(questionOption.children[i].id) === currentQuestion.answer) {
                questionOption.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOpt();
}


function unclickableOpt() {
    const optionLen = questionOption.children.length;
    for (let i = 0; i < optionLen; i++){
        questionOption.children[i].classList.add("already-answered");
    }
}

function answerIndicator(params) {
    answerIndicatorCont.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i = 0; i <totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorCont.appendChild(indicator);

    }
}

function updateAnsIndicator(markType){
    answerIndicatorCont.children[questionCounter-1].classList.add(markType);
}

function next(){
    if(questionCounter === quiz.length){
        quizover();
    }
    else{
        getNewQuestion();
    }
}

function quizover(){
    quizBx.classList.add("hide");
    resultBx.classList.remove("hide");
    quizResult();
} 

function quizResult(){
    resultBx.querySelector(".total-question").innerHTML = quiz.length;
    resultBx.querySelector(".total-attempts").innerHTML = attempt;
    resultBx.querySelector(".total-correct").innerHTML = correctAns;
    resultBx.querySelector(".total-wrong").innerHTML = attempt - correctAns;
    const percentage = (correctAns / quiz.length) * 100;
    resultBx.querySelector(".total-percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBx.querySelector(".total-score").innerHTML = correctAns + " / " + quiz.length;
}

function resetQuiz(){
    questionCounter = 0;
    correctAns = 0;
    attempt = 0;
}

function tryAgain(){
    resultBx.classList.add("hide");
    quizBx.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goHome() {
    resultBx.classList.add("hide");
    homeBx.classList.remove("hide");
    resetQuiz();
}

function startQuiz() {

    homeBx.classList.add("hide");

    quizBx.classList.remove("hide");

    setAvailableQuestion();

    getNewQuestion();

    answerIndicator();
}

window.onload = function () {
    homeBx.querySelector(".total-no").innerHTML = quiz.length;
}