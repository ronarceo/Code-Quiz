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

//variable defined for starting number seconds for the quiz
let secondsLeft = 100;

//variable defined to be used for question number
let qNumber = 0

//array of questions
var qList = [
  {
    question: "What can be used to declare a variable in JavaScript?",
    answer: "D",
    choiceA: "A) let",
    choiceB: "B) var",
    choiceC: "C) const",
    choiceD: "D) All of the above"
  },
  {
    question: "What is the correct syntax for writing a message to the console?",
    answer: "B",
    choiceA: "A) log.console()",
    choiceB: "B) console.log()",
    choiceC: "C) console.write()",
    choiceD: "D) write.console()"
  },
  {
    question: "",
    answer: "",
    choiceA: "A) ",
    choiceB: "B) ",
    choiceC: "C) ",
    choiceD: "D) "
  },
];

// if starBtn button clicked then quiz starts
start.addEventListener('click', startQuiz)

//function to start timer
function startTime() {
  var timerInterval = setInterval(function() {
    timeLeft.textContent = secondsLeft;
    secondsLeft--;

    if(secondsLeft === 0) {
      alert('Game Over, you ran out of time.')
      location.reload();
    }
  }, 1000);
}

//function to start quiz
function startQuiz() {
    console.log('Quiz Started');
    rules.style.display = "none";
    startMenu.style.display = "none";
    quiz.style.display = "block";
    generateQuestion();
    startTime();
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
    secondsLeft = secondsLeft - 5;
  }
}

// if scoresBtn button clicked then shows lists of highscores
scores.addEventListener('click', function(){
    console.log('Highscores');
    rules.style.display = "none";
    startMenu.style.display = "none";
})