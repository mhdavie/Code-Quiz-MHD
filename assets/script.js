var questions = [
{
    title:"What does HTML stand for?",
    choices:["A. Hyper Trainer Marking Language", "B. Hyper Text Marketing Language", "C. Hyper Text Markup Language","d. Hyper Text Markup Leveler"],
    answer:"C.Hyper Text Markup Language",

},
{
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
    answer: "C. quotes"
},
{
    title: "The first index of an array is ____.",
    choices: ["A. 0", "B. 1", "C. 8", "D. any"],
    answer: "A. 0"
},
{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["A. onclick", "B. onchange", "C. onmouseover", "D. onmouseclick"],
    answer: "A. onclick"
},
{
    title: "How do you add a comment in a JavaScript?",
    choices: ["A. //This is a comment", "B. <!--This is a comment-->", "C. 'This is a comment", "D. * This is a comment *"],
    answer: "A. //This is a comment"
},

];
//Declare variables

var score = 0;
var questionIndex =0;

var timerCount = document.querySelector("#timer");
var timerstart = document.querySelector("#timestart");
var questions = document.querySelector("#questionsDiv");
var container = document.querySelector ("#container");

//seconds left

var secondsLeft = 60;

var holdInterval = 0;

var penalty = 10;

var ulCreate = document.createElement("ul");

//set interval

timer.addEventListener("click", function (){
 if (holdInterval=== 0)
     holdInterval = setInterval(function() {
     secondsLeft--;
     currentTime.textContent = "time: " + secondsLeft;

 if (secondsLeft <= 0){
     clearInterval(holdInterval);
     allDone();
     currentTime.textContent = "Game Over"
     }    
},1000);
 
  render(questionIndex);
 
});

