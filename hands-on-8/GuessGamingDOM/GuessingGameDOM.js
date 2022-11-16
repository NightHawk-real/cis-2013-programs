/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
var $ = function (id) 
{
    return document.getElementById(id);
};

var play = function()
{
    var intMax, intMin, intRandom, intGuess, intCount, intScore, intPrevious, stringMinValid;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

    intMin = $("min_input").value
        if ((isNaN(intMin)) || (intMin < 0)) // validation that user enters a positive, numeric value for the minimum value of their guessing range
        {
            $("min_valid").value = "Incorrect value. Please enter a number that is greater than or equal to 0.";
        }

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
    intMax = $("max_input").value;
        while((isNaN(intMax)) || !(intMax-intMin >= 2))   // while the user inputs a string, or a number that is not 2 >= intMin, 
        {                                                 // then the user will be prompted "Incorrect value. Please enter a number that is at least 2 larger than your minimum value."
            $("max_valid").value = "Incorrect value. Please enter a number that is at least 2 larger than your minimum value.";
        }

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */

    intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);
    

// set the loop counter

    intCount = 1;
    intLimiter = ((intMax - intMin)/2);
    intPrevious = [];
/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

    intGuess = parseInt(prompt("Guess a number between " + intMin + " and " + intMax + ". You have " + (intLimiter) + " guesses."));
while((intGuess != intRandom) && (intCount < intLimiter))
        {
            intPrevious.push(intGuess)
    while((intGuess != intRandom) && (intCount < intLimiter))
        {
            if (!(isNaN(intGuess)) || (intGuess > intMin) || (intGuess < intMax))  //if statement that validates that intGuess is a number, that intGuess > intMin, intGuess < intMax
            {  
                if (intGuess < intRandom)
                {
                    intGuess = parseInt(prompt("Guess is too low! Guess higher. " + "You have " + (intLimiter - intCount) + " guesses left."));
                }
                else
                {
                    intGuess = parseInt(prompt("Guess is too high! Guess lower. " + "You have " + (intLimiter - intCount) + " guesses left."));
                }
            }
            else  // if intGuess is not a number, or it is outside the valid previously determined range, the user will be prompted to input a correct value until they do so.
            {
                while((isNaN(intGuess)) || (intGuess < intMin) || (intGuess > intMax))  
                {
                    intGuess = parseInt(prompt("Incorrect value. Please enter a number within the guessing range."));
                }
            }
            intCount++; // increments every time the user makes a guess, which keeps track of the amount of guesses they have made in total
            intPrevious.push(intGuess);
        }
        }
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
    intScore = (101 - Math.pow(intCount, 2));

    if ((intGuess != intRandom) && (intCount === intLimiter))
    {
        alert("Out of guessess! The number was: " + intRandom + " \nYou used " + intCount + " attempts.");
    }
    else 
        {
            alert("Congratulations!!! You guessed the correct number: " + intRandom +"\n" + "You used " + intCount + " attempts!\nYour score: " + intScore);
        }

    $("output").value = "Previous guesses: " + intPrevious;
// provides final output upon successful guessing
/* Added a score counter based out of 100 points that exponentially 
* decreases with each additional guess. The total points are based out of
* 101 points as intCount is set to 1, meaning that 101 - 1 = 100, resulting
* in the maximum points possible being 100. */

}

window.onload = function ()
{
    $("play_button").onclick = play; 
}

/* Future Features:
* Main Menu
* Limited tries like Wordle
* Displays previous guesses
* Warn about duplicate guesses
* Convert everything to DOM input
* Play again screen ---> Wiley said another HTML page
* Change background based off of remaining guesses
*/