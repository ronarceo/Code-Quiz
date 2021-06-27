//assigned variables to corresponding HTML divs
let rules = document.querySelector(".rules");
let startMenu = document.querySelector(".startMenu");
let start = document.getElementById("startBtn");
let scores = document.getElementById("scoresBtn");
let quiz = document.querySelector(".quiz");
let question = document.querySelector(".question");
let choices = document.querySelector(".choices");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let timeLeft = document.querySelector("#timeLeft");

//array of questions
var qList = [
  {
    question: "What does HTML stand for?",
    answer: "B",
    choiceA: "A) Hyper Text Markdown Language",
    choiceB: "B) Hyper Text Markup Language",
    choiceC: "C) Hyper Text Memory Language",
    choiceD: "D) Hyper Tool Multiple Language"
  },
  {
    question: "What does CSS stand for?",
    answer: "D",
    choiceA: "A) Common Style Sheet",
    choiceB: "B) Calculated Style Sheet",
    choiceC: "C) Computer Style Sheet",
    choiceD: "D) Cascading Style Sheet"
  },
];

//variable defined to be used for question number
let qNumber = 0

// if starBtn button clicked then quiz starts
start.addEventListener('click', startQuiz)

//function to start quiz
function startQuiz() {
    console.log('Quiz Started');
    rules.style.display = "none";
    startMenu.style.display = "none";
    quiz.style.display = "block";
    generateQuestion();
}

//function to generate question
function generateQuestion() {
    console.log('Question Generated')
    let q = qList[qNumber];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//function to select answer
function choose(choice) {
  let q = qList[qNumber];
  if (choice == q.answer) {
    qNumber++;
    generateQuestion();
  } else {
    //reduce time
    console.log('time penalty');
  }
}

// if scoresBtn button clicked then shows lists of highscores
scores.addEventListener('click', function(){
    console.log('Highscores');
    rules.style.display = "none";
    startMenu.style.display = "none";
})