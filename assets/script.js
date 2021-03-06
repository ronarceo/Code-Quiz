//assigned variables to corresponding HTML divs
let rules = document.querySelector(".rules");
let startMenu = document.querySelector(".startMenu");
let start = document.getElementById("startBtn");
let viewScores = document.getElementById("scoresBtn");
let quiz = document.querySelector(".quiz");
let question = document.querySelector(".question");
let choices = document.querySelector(".choices");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let timeLeft = document.querySelector("#timeLeft");
let scoreList = document.querySelector(".scoreList");
let scoreMenu = document.querySelector(".scoreMenu");
let clearScores = document.getElementById("clearBtn");
let viewRules = document.getElementById("rulesBtn");
let initials = document.getElementById("initials");
let score = document.getElementById("score");

//variable defined for starting number seconds for the quiz
let secondsLeft = 100;

//variable defined to be used for question number
let qNumber = 0;

// if starBtn button clicked then quiz starts
start.addEventListener('click', startQuiz)

//function to start quiz
function startQuiz() {
  rules.style.display = "none";
  startMenu.style.display = "none";
  quiz.style.display = "block";
  startTime();
  generateQuestion();
}

//function to start timer
let timerInterval;
function startTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if(secondsLeft === 0) {
      alert('Game Over, you ran out of time.')
      location.reload();
    }
  }, 1000);
}

//function to stop timer once all questions answered
function stopTime() {
  clearInterval(timerInterval);
  var record = confirm('Do you want to save your score?');

  if (record) {
    localStorage.setItem('score', secondsLeft);
    var initials = prompt('Enter your initials.');
    localStorage.setItem('initials', initials);
    location.reload();
  } else {
    location.reload();
  }
}

//function to generate question
function generateQuestion() {
  if (qNumber < qList.length) {
    let q = qList[qNumber];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  } else {
    stopTime();
  }
}

//function to select answer
function choose(choice) {
  let q = qList[qNumber];
  if (choice == q.answer) {
    qNumber++;
    generateQuestion();
  } else {
    secondsLeft -= 5;
  }
}

// if scoresBtn button clicked then shows lists of highscores
viewScores.addEventListener('click', function(){
    rules.style.display = "none";
    startMenu.style.display = "none";
    scoreList.style.display = "block";
    scoreMenu.style.display = "block";
    initials.innerHTML = localStorage.getItem('initials');
    score.innerHTML = localStorage.getItem('score');
})

// if clearBtn button clicked then deletes all highscores
clearScores.addEventListener('click', function(){
  localStorage.removeItem('score');
  localStorage.removeItem('initials');
  initials.innerHTML = '';
  score.innerHTML = '';
})

// if rulesBtn button clicked then returns to rules and start menu
viewRules.addEventListener('click', function(){
    rules.style.display = "block";
    startMenu.style.display = "block";
    scoreList.style.display = "none";
    scoreMenu.style.display = "none";
})

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
    question: "In JavaScript, single line comments start with what symbols?",
    answer: "A",
    choiceA: "A) //",
    choiceB: "B) /*",
    choiceC: "C) */",
    choiceD: "D) **"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answer: "C",
    choiceA: "A) string",
    choiceB: "B) boolean",
    choiceC: "C) subject",
    choiceD: "D) object"
  },
  {
    question: "What property or method returns the number of characters in a string?",
    answer: "A",
    choiceA: "A) length",
    choiceB: "B) slice",
    choiceC: "C) substr",
    choiceD: "D) substring"
  },
  {
    question: "Which method is used to add a value as the first item in an array without removing any of its current values?",
    answer: "D",
    choiceA: "A) .push()",
    choiceB: "B) .pop()",
    choiceC: "C) .shift()",
    choiceD: "D) .unshift()"
  },
  {
    question: "The method Math.random() returns a random number between what numbers?",
    answer: "B",
    choiceA: "A) -1 and 0",
    choiceB: "B) 0 and 1",
    choiceC: "C) 0 and 10",
    choiceD: "D) 0 and 100"
  },
  {
    question: "Which comparison returns a value of true?",
    answer: "C",
    choiceA: "A) 2 < 12",
    choiceB: "B) '2' > '12'",
    choiceC: "C) Both A and B",
    choiceD: "D) Neither A and B"
  },
  {
    question: "In an if statement the condition is enclosed between what?",
    answer: "A",
    choiceA: "A) ()",
    choiceB: "B) {}",
    choiceC: "C) []",
    choiceD: "D) ''"
  },
  {
    question: "Which of the following is a type of loop in JavaScript?",
    answer: "D",
    choiceA: "A) if",
    choiceB: "B) for",
    choiceC: "C) while",
    choiceD: "D) Both B and C"
  }
];