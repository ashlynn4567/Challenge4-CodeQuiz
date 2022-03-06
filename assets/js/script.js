// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// ------------------------------------------------------------------------------------------------------?. RUN THE QUIZ //
// -----------------------------------------------------------------?. CLICK EVENT LISTENER TO SET THE PROGRAM IN MOTION //
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
        Answer: "Answer 1"
    },
    {
        question: "Question 2",
        choices: ["Answer 1", "Answer 2", "Answer 3"],
        Answer: "Answer 2"
    },
    {
        question: "Question 3",
        choices: ["Answer 1", "Answer 2", "Answer 3"],
        Answer: "Answer 3"
    }
];
// END VARIABLE SECTION------------------------------------------------------------------------------------------------- //




// ?. RUN THE QUIZ------------------------------------------------------------------------------------------------------ //
var startQuiz = function() {
    // hide the intro
    introEl.style.display = "none";

    // setting inner text of h2 element to be question number
    questionPromptEl.innerText = questionList[questionNumber].question;

    // loop through question array
    for (i = 0; i < questionList[questionNumber].choices.length; i++) {
        // create element for list item
        var answerButton = document.createElement("button");

        // set list item element content
        answerButton.innerText = questionList[questionNumber].choices[i];

        // append list item element to div parent
        questionChoicesEl.appendChild(answerButton);
    };

    // // increase question number
    // questionNumber++
};

var endQuiz = function() {
    // once the timer reaches 0, end the quiz
};

// function to run all the quiz functions
var quizHandler = function() {
    startQuiz();
    endQuiz();
};
// -----------------------------------------------------------------------------------------------------END QUIZ SECTION //




// ?. SAVE THE HIGHSCORE------------------------------------------------------------------------------------------------ //
// function to run all the highscore functions
var highScoreHandler = function() {
    
};
// ------------------------------------------------------------------------------------------------END HIGHSCORE SECTION //




// ?. CLICK EVENT LISTENER TO SET THE PROGRAM IN MOTION----------------------------------------------------------------- //
startBtn.addEventListener("click", quizHandler);
// -------------------------------------------------------------------------------------END CLICK EVENT LISTENER SECTION //