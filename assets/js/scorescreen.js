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
};

// function to clear the high scores
var clearHighScores = function() {

};
// -------------------------------------------------------------------------------------END HIGH SCORE HANDLER FUNCTIONS //




// 3. CLICK EVENT LISTENER AND FIRST FUNCTION CALL---------------------------------------------------------------------- //
// clear scores when user clicks clear scores
clearBtn.addEventListener("click", clearHighScores);
// -------------------------------------------------------------------END CLICK EVENT LISTENER AND FUNCTION CALL SECTION //