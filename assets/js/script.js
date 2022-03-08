// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// ------------------------------------------------------------------------------------------------------?. RUN THE QUIZ //
// ------------------------------------------------------------------------------------------------?. SAVE THE HIGHSCORE //
// ---------------------------------------------------------------------------------------------?. CLICK EVENT LISTENERS //
// --------------------------------------------------------------------------------------------------------------------- //




// 1. DEFINING VARIABLES------------------------------------------------------------------------------------------------ //
// query selector to find HTML elements on the page
var timerEl = document.getElementById("countdown");
var introEl = document.getElementById("intro");
var startBtn = document.getElementById("start");
var questionParentEl = document.getElementById("questions")
var questionPromptEl = document.getElementById("question-prompt");
var questionChoicesEl = document.getElementById("question-choices");
var userAnswerOutcomeParentEl = document.getElementById("answer-feedback");
var userAnswerOutcomeEl = document.getElementById("answer-outcome");
var highscoreParentEl = document.getElementById("score-input");

// Counter variables
var questionNumber = 0;
var numberCorrect = 0;
var time = 100;
var timer;

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

    // display the countdown timer
    timerEl.textContent = time;

    // start the countdown timer
    timer = setInterval(clock, 1000);

    // begin displaying the questions
    runQuizQuestions();
};

var clock = function() {
    // countdown time 
    time--;
    // display updated countdown timer
    timerEl.textContent = time;

    // condition to end quiz if user runs out of time
    if (time <= 0) {
        endQuiz();
    };
};

var runQuizQuestions = function() {
    // reset inner text of h2 element 
    questionPromptEl.innerText = ""
    
    // setting inner text of h2 element to be question number
    questionPromptEl.innerText = questionList[questionNumber].question;

    // clear previous answer choices
    questionChoicesEl.innerHTML = "";

    // loop through question array
    for (i = 0; i < questionList[questionNumber].choices.length; i++) {
        // create element for list item
        var answerButtonEl = document.createElement("button");
        
        // give button styling class
        answerButtonEl.setAttribute("class", "answer btn btn-block col-4 btn-outline-info");
        
        // set list item element content
        answerButtonEl.innerText = questionList[questionNumber].choices[i];

        // append list item element to div parent
        questionChoicesEl.appendChild(answerButtonEl);
    };
    // listen for a click on any of the buttons
    questionChoicesEl.addEventListener("click", checkAnswer);
};

var checkAnswer = function(event) {
    // log the click event
    console.log("clicked");
    // log which button element was clicked
    console.log(event.target);

    // hide the feedback display
    userAnswerOutcomeParentEl.style.display = "none";

    // check if answer is right or wrong
    // if right
    if (event.target.innerText === questionList[questionNumber].answer) {
        // tell user their answer was correct
        console.log("correct");
        userAnswerOutcomeEl.textContent = "Correct!";

        // reward points for correct answer
        numberCorrect += 1;
    
    // if wrong
    } else {
        // tell user their answer was wrong
        console.log("incorrect");
        userAnswerOutcomeEl.textContent = "Incorrect!";
        
        // subtract time from timer
        time -= 10;
        // redisplay the updated countdown timer
        timerEl.textContent = time;

    };

    // allow feedback to be shown for a short interval
    userAnswerOutcomeParentEl.style.display = "";
    setTimeout(function() {
        userAnswerOutcomeParentEl.style.display = "none";
    }, 1000);


    // if question array is complete, run endquiz();
    if (questionNumber === (questionList.length - 1)) {
        endQuiz();
    
    // else, run next question 
    } else {
        // increase question number
        questionNumber++;

        runQuizQuestions();
    };
};


var endQuiz = function() {
    console.log("You have reached the end.");

    // stop the countdown
    clearInterval(timer);

    // allow the user to get feedback before the question section disappears
    setTimeout(function() {
        questionParentEl.style.display = "none";
        userAnswerOutcomeParentEl.style.display = "none";
    }, 1000);

    // display final score

    // display high score page
    
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
startBtn.addEventListener("click", startQuiz);

// once the user clicks the save score button, save their highscore

// -------------------------------------------------------------------------------------END CLICK EVENT LISTENER SECTION //