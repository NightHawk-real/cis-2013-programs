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
    var intMax, intMin, intRandom, intGuess, intCount, intScore, intPrevious;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

    intMin = parseInt(prompt("Please enter the minimum value of your guessing range: ")); 
        while((isNaN(intMin)) || (intMin < 0)) // validation that user enters a positive, numeric value for the minimum value of their guessing range
        {
            intMin = parseInt(prompt("Incorrect value. Please enter a number that is greater than or equal to 0."));
        }

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
    intMax = parseInt(prompt("Please enter the maximum value of your guessing range:"));
        while((isNaN(intMax)) || !(intMax-intMin >= 2))   // while the user inputs a string, or a number that is not 2 >= intMin, 
        {                                                 // then the user will be prompted "Incorrect value. Please enter a number that is at least 2 larger than your minimum value."
            intMax = parseInt(prompt("Incorrect value. Please enter a number that is at least 2 larger than your minimum value."));
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
    intLimiter = ((intMax - intMin)/2); //This is the function that takes the average of their selected range and sets it to their number of guesses
    intPrevious = [];  // This is the array that tracks the user's previous guesses 
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
                    intGuess = parseInt(prompt("Guess is too low! Guess higher. " + "You have " + (intLimiter - intCount) + " guesses left.\nPrevious Number(s) Guessed: " + intPrevious));
                } // line above gives a prompt that tells them their guess was too high, how many guesses they have left, and what their previous guesses were.
                else
                {
                    intGuess = parseInt(prompt("Guess is too high! Guess lower. " + "You have " + (intLimiter - intCount) + " guesses left.\nPrevious Number(s) Guessed: " + intPrevious));
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
            intPrevious.push(intGuess); // pushes their previous guesses to record them
        }
        }
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
    intScore = (101 - Math.pow(intCount, 2)); // Score function based on 2^intCount, exponentially decreases the more guesses they use.

    if ((intGuess != intRandom) && (intCount === intLimiter))
    {
        alert("Out of guessess! The number was: " + intRandom + " \nYou used " + intCount + " attempts.\nYour Guesses: " + intPrevious);
    }
    else 
        {
            alert("Congratulations!!! You guessed the correct number: " + intRandom +"\n" + "You used " + intCount + " attempts!\nYour Guesses: " + intPrevious + "\nYour score: " + intScore);
        }// Congratulates the user for winning, shows them what the correct number was, how many attempts they used, what their previous guesses were, and their score

    $("output").value = "Previous guesses: " + intPrevious; // outputs to the textbox what their previous guesses were during their game.
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

/*Features actually added:
* Main Menu, sort of
*       Play button which creates a sort of main menu
* Limited number of attempts
* Records and displays previous attempts
* Displays decreasing number of attempts
* Score based out of 100 that decreases exponentially by 2^intCount
* Background and some text changed
* Validation for all inputs (Although I think the validation is bugged/broken when you first type a number outside of the range. It says
*   too high or too low, rather than saying Incorrect value. However, if you type a string first instead of an integer, it then will recognize
*   that numbers outside of the range afterwards are incorrect values after the first incorrect value message displayed when the
*   string is incorrectly input.)
* Displays guesses of previous game in the textarea on the main menu
*/





/* Future Features:
* Main Menu
* Limited tries like Wordle
* Displays previous guesses
* Warn about duplicate guesses
* Convert everything to DOM input
* Play again screen ---> Wiley said another HTML page
* Change background based off of remaining guesses
*/