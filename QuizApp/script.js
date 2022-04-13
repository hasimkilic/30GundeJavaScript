function Questions(text, choises, answer) {
    this.text = text;
    this.choises = choises;
    this.answer = answer;
}
//* Questions prototype

Questions.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

//*Quiz constructor

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

//*Quiz prototype
Quiz.prototype.getQuestions = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

//*quiz guess

Quiz.prototype.guess = function(answer) {
    let question = this.getQuestions();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


let q1 = new Questions("Son yıllarda en çok popüler olan programlama dili hangisidir?", ['Angular', 'Java', 'c#', 'Javascript', ], "Javascript")
let q2 = new Questions("Son yıllarda en çok popüler olan programlama dili hangisidir?", ['Angular', 'Java', 'c#', 'Javascript', ], "Javascript")
let q3 = new Questions("Son yıllarda en çok popüler olan programlama dili hangisidir?", ['Angular', 'Java', 'c#', 'Javascript', ], "Javascript")

let questions = [q1, q2, q3]

//*start quiz

let quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {

    if (quiz.isFinish()) {
        //showscore
        showScore();
    } else {
        let question = quiz.getQuestions();
        let choises = question.choises;
        document.querySelector('#question').textContent = question.text;

        for (let i = 0; i < choises.length; i++) {
            let element = document.querySelector('#choice' + i)
            element.innerHTML = choises[i];

            guess('btn' + i, choises[i]);
        }
        showProgress();
    }

}

function guess(id, guess) {
    let btn = document.getElementById(id);
    btn.onclick = () => {
        quiz.guess(guess);
        loadQuestion();
    }
}


function showScore() {
    let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex + 1;
    let html = document.getElementById('progress');
    html.innerHTML = 'Question ' + questionNumber + ' of ' + totalQuestion;
}

//console.log(q1.checkAnswer('c#')) //false
//console.log(q2.checkAnswer('Javascript')) //true
























//*