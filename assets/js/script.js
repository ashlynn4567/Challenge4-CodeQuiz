// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// ------------------------------------------------------------------------------------------------------2. RUN THE QUIZ //
// ------------------------------------------------------------------------------------------------3. SAVE THE HIGHSCORE //
// ---------------------------------------------------------------------------------------------4. CLICK EVENT LISTENERS //
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
var userFinalScoreEl = document.getElementById("user-final-score");
var userInitialsEl = document.getElementById("initals");
var highScoreBtn = document.getElementById("submit-score");

// Counter variables
var questionNumber = 0;
var numberCorrect = 0;

// timer related variables
var time = 100;
var timer;

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




// 2. RUN THE QUIZ------------------------------------------------------------------------------------------------------ //
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
    // hide the feedback display
    userAnswerOutcomeParentEl.style.display = "none";

    // check if answer is right or wrong
    // if right
    if (event.target.innerText === questionList[questionNumber].answer) {
        // tell user their answer was correct
        console.log("correct");
        userAnswerOutcomeEl.textContent = "Correct!";
        userAnswerOutcomeEl.setAttribute("class", "");

        // reward points for correct answer
        numberCorrect += 1;
    
    // if wrong
    } else {
        // tell user their answer was wrong
        console.log("incorrect");
        userAnswerOutcomeEl.textContent = "Incorrect!";
        userAnswerOutcomeEl.setAttribute("class", "");
        
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
        // hide question section
        questionParentEl.style.display = "none";
        userAnswerOutcomeParentEl.style.display = "none";

        // display final score section
        highscoreParentEl.style.display = "";

        // display final score
        userFinalScoreEl.textContent = numberCorrect * time;
    }, 1000);

    // display high score page

};
// -----------------------------------------------------------------------------------------------------END QUIZ SECTION //




// 3. SAVE THE HIGHSCORE------------------------------------------------------------------------------------------------ //
// function to save highscore
var saveScore = function() {
    // get user initials from text box
    var initials = userInitialsEl.value.trim();

    // check to see if the value is empty
    if (initials !== "") {
        // retrieve scores from local storage
        var allHighScores = JSON.parse(window.localStorage.getItem("allHighScores")) || [];

        // create object for current user's score
        var userHighScore = {
            score: userFinalScoreEl.textContent, 
            initials: initials
        };

        // save new object with user's score to localstorage
        allHighScores.push(userHighScore);
        window.localStorage.setItem("allHighScores", JSON.stringify(allHighScores));

        // link to high score html page
        window.location.href = "scorescreen.html";
    };
};
// ------------------------------------------------------------------------------------------------END HIGHSCORE SECTION //




// 4. CLICK EVENT LISTENERS--------------------------------------------------------------------------------------------- //
// once user clicks start quiz button, start the quiz
startBtn.addEventListener("click", startQuiz);

// once the user clicks the save score button, save their highscore
highScoreBtn.addEventListener("click", saveScore);
// -------------------------------------------------------------------------------------END CLICK EVENT LISTENER SECTION //