// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// --------------------------------------------------------------------------------------2. HIGH SCORE HANDLER FUNCTIONS //
// ----------------------------------------------------------------------3. CLICK EVENT LISTENER AND FIRST FUNCTION CALL //
// --------------------------------------------------------------------------------------------------------------------- //




// 1. DEFINING VARIABLES------------------------------------------------------------------------------------------------ //
var clearBtn = document.getElementById("clear");
// -------------------------------------------------------------------------------------------------END VARIABLE SECTION //




// 2. HIGH SCORE HANDLER FUNCTIONS-------------------------------------------------------------------------------------- //
// function to pull the highscores from localstorage
var getAllHighScores = function() {
    // get scores from localstorage
    var allHighScores = JSON.parse(window.localStorage.getItem("allHighScores")) || [];

    // order scores
    allHighScores.sort(function(x, y) {
        return y.score - x.score;
    });

    // function to show the highscores pulled from localstorage
    allHighScores.forEach(function(score) {
        // create list item for each high score
        var scoreItem = document.createElement("li");
        scoreItem.textContent = score.initials + ": " + score.score;
        scoreItem.setAttribute("class", "");

        // append to parent to display on the page
        var scoreList = document.getElementById("highscore-list");
        scoreList.appendChild(scoreItem);
    });
};


// function to clear the high scores
var clearHighScores = function() {
    window.localStorage.removeItem("allHighScores");
    window.location.reload();
};
// -------------------------------------------------------------------------------------END HIGH SCORE HANDLER FUNCTIONS //




// 3. CLICK EVENT LISTENER AND FIRST FUNCTION CALL---------------------------------------------------------------------- //
// call highScoreHandler to show list of high scores
getAllHighScores();

// clear scores when user clicks clear scores
clearBtn.addEventListener("click", clearHighScores);
// -------------------------------------------------------------------END CLICK EVENT LISTENER AND FUNCTION CALL SECTION //