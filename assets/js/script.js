// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// ------------------------------------------------------------------------------------------------------?. RUN THE QUIZ //
// ------------------------------------------------------------------------------------------------?. SAVE THE HIGHSCORE //
// ---------------------------------------------------------------------------------------------?. CLICK EVENT LISTENERS //
// --------------------------------------------------------------------------------------------------------------------- //




// 1. DEFINING VARIABLES------------------------------------------------------------------------------------------------ //
// query selector to find HTML elements on the page
var startBtn = document.querySelector("#start");
var questionPromptEl = document.querySelector("#question-prompt");
var introEl = document.querySelector("#intro");
var questionNumber = 0;
var questionChoicesEl = document.querySelector("#question-choices");

// timer related variables

// question array
questionList = [
    {
        question: "Question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3"],
        answer: "Answer 1"
    },
    {
        question: "Question 2",
        choices: ["Answer 1", "Answer 2", "Answer 3"],
        answer: "Answer 2"
    },
    {
        question: "Question 3",
        choices: ["Answer 1", "Answer 2", "Answer 3"],
        answer: "Answer 3"
    }
];
// END VARIABLE SECTION------------------------------------------------------------------------------------------------- //




// ?. RUN THE QUIZ------------------------------------------------------------------------------------------------------ //
var startQuiz = function() {
    // hide the intro
    introEl.style.display = "none";

    // // begin timing functions
    // timer();

    // begin displaying the questions
    runQuizQuestions();
};

var timer = function() {
    // display the countdown timer

    // start the countdown timer

    // countdown time 

    // condition to end quiz if user runs out of time
};

var runQuizQuestions = function() {
    // setting inner text of h2 element to be question number
    questionPromptEl.innerText = questionList[questionNumber].question;

    // clear previous question choices
    questionChoicesEl.innerHTML = "";

    // loop through question array
    for (i = 0; i < questionList[questionNumber].choices.length; i++) {
        // create element for list item
        var answerButtonEl = document.createElement("button");
        
        // give button styling class
        answerButtonEl.setAttribute("class", "btn btn-block col-4 btn-outline-info");
        
        // set list item element content
        answerButtonEl.innerText = questionList[questionNumber].choices[i];

        // append list item element to div parent
        questionChoicesEl.appendChild(answerButtonEl);        
    };
    
    // identify clicked answer as user's answer

    // click event listener on each answer choice
    answerButtonEl.addEventListener("click", getUserAnswer);
};

var getUserAnswer = function(answerButtonEl) {
    console.log("clicked");
    
    // check if answer is right or wrong
    // if right
    if (answerButtonEl.innerText === questionList[questionNumber].answer) {
        // tell user their answer was correct
        console.log("correct");

        // reward points for correct answer
    
    // if wrong
    } else {
        // tell user their answer was wrong
        console.log("incorrect");
        
        // subtract time from timer
    
        // display updated time

    };

    // increase question number
    // questionNumber++;

    // if question array is not complete, run next question 
        // runQuizQuestions();

    // else, run endquiz();
        // endQuiz();
};


var endQuiz = function() {
    // stop the countdown

    // hide question section

    // display final score

    // display high score page
};

// function to run all the quiz functions
var quizHandler = function() {
    startQuiz();
    // endQuiz();
};
// -----------------------------------------------------------------------------------------------------END QUIZ SECTION //




// ?. SAVE THE HIGHSCORE------------------------------------------------------------------------------------------------ //
// function to run all the highscore functions
var highScoreHandler = function() {
    // get user initials from text box

    // check to see if the value is empty

    // retrieve scores from local storage

    // create score object for current user

    // save to localstorage

    // direct user to high score page
};
// ------------------------------------------------------------------------------------------------END HIGHSCORE SECTION //




// ?. CLICK EVENT LISTENERS--------------------------------------------------------------------------------------------- //
// once user clicks start quiz button, start the quiz
startBtn.addEventListener("click", quizHandler);

// once the user clicks the save score button, save their highscore

// -------------------------------------------------------------------------------------END CLICK EVENT LISTENER SECTION //