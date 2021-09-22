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
     timerstart.textContent = "time: " + secondsLeft;

 if (secondsLeft <= 0){
     clearInterval(holdInterval);
     allDone();
     timerstart.textContent = "Game Over"
     }    
},1000);
 
  render(questionIndex);
 
});

// print questions and choices to page:

function render(questionIndex){
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;

}
//new for each choice
userChoices.forEach(function (newItem) { 
var listItem = document.createElement("li");
listItem.textContent = newItem;
questionsDiv.appendChild(ulCreate);
ulCreate.appendChild(listItem);
listItem.addEventListener("click", (compare));
})
}

//create attributes - compare choices w/ answers 

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var creatDiv = document.createElement("div")
        creatDiv.setAttribute("id", "creatDiv")
    }

        //if the answer is correct

if (element.textContent == questions[questionIndex].answer){
            score++;
            alert = "Correct! The answer is:  " + questionIndex[questionIndex].answer
           //if the answer is wrong
         }    else{
             secondsLeft = secondsLeft -penalty;
             alert = "Wrong the correct anwser is : " + questionIndex[questionIndex].answer
         }
         
} 

// questionindex determines what question the user is on
questionIndex++;

if (questionIndex >= questions.length){
    allDone();
    alert = "End of quiz" + " " + "You got  " + "/" +  questions.length + "correct!";
} else {
    render(questionIndex);
}
    questionsDiv.appendChild(createDiv);

function allDone() {
        questionsDiv.innerHTML = "";
        timerCount.innerHTML = "";
    
// Heading:

var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!"
    
        questionsDiv.appendChild(createH1);

// Paragraph
        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");
    
        questionsDiv.appendChild(createP);

//  Calculates time remaining and replaces it with score


if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;
}
    questionsDiv.appendChild(createP2);
}

// creat label

var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initials: ";

questionsDiv.appendChild(createLabel);

//input

var userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("id", "initials");
userInput.textContent = "";

questionsDiv.appendChild(userInput);

//submit button

var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit";

questionsDiv.appendChild(createSubmit);

//  add event listner for highscores html


createSubmit.addEventListener("click", function () {
    var initials = createInput.value;


    if (initials === null) {

        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        
        
// second html file
        window.location.replace("highscores.html");
    }
});











