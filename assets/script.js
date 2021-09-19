var questions = [
{
    title:"",
    choices:"",
    answer:"",

},
{
    title:"",
    choices:"",
    answer:"",
},
{
    title:"",
    choices:"",
    answer:"",
},
{
    title:"",
    choices:"",
    answer:"",
},
{
    title:"",
    choices:"",
    answer:"",
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

var secondsLeft = 76;

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

