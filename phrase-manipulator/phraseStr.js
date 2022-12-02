var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
    {
        var stringEntry = $("phrase").value;
        stringEntry = stringEntry.toUpperCase(); //changes the case of each character in the phrase to uppercase to standardize checks later on
        if (stringEntry === "") // validation for the input phrase
            {
                $("phrase").value = "";
                alert("Please enter a phrase and select a button"); 
            }
        else   
            {
                var intVowels = 0; //initialize intVowels variable
                for(intCount = 0; intCount < stringEntry.length; intCount++) // loop continues as long as intCount < the length of the input phrase
                {
                    if((stringEntry.charAt(intCount) === "A")||(stringEntry.charAt(intCount) === "E")||(stringEntry.charAt(intCount) === "I")||(stringEntry.charAt(intCount) === "O")||(stringEntry.charAt(intCount) === "U")) //checks whether each character is an uppercase variable or not
                    {
                        intVowels++; //increments count of intVowels each time the if statement runs into a vowel
                    }
                }
                $("output").value = "There are " + intVowels + " vowels in the phrase above."; //outputs string with intConsonants count
            }
    }

var consonants = function () 
    {
        var stringEntry = $("phrase").value; // sets input phrase to stringEntry
        stringEntry = stringEntry.toUpperCase();  //changes the case of each character in the phrase to uppercase to standardize checks later on
        if (stringEntry === "")  // validation of input phrase
            {
                $("phrase").value = "";
                alert("Please enter a phrase and select a button");
            }
        else
            {
                var intConsonants = 0;
                for(intCount = 0; intCount < stringEntry.length; intCount++)
                {
                    switch(stringEntry.charAt(intCount)) // switch statement to test for each of the uppercase vowels
                    {
                        case "A":
                        case "E":
                        case "I":
                        case "O":
                        case "U":
                        case " ":
                            break; // does not count the vowels and moves onto the next character
                        default:   //default statement if a vowel is not caught
                            intConsonants++; // increments the intConsonants variable when a character is not a vowel
                            break;
                    }
                }
                $("output").value = "There are " + intConsonants + " consonants in the phrase above." // outputs string with intConsonants count
            }
    }
var reverse = function ()
    {
        var stringEntry = $("phrase").value;
        if (stringEntry === "") //validation of input phrase
        {
            $("phrase").value = "";
            alert("Please enter a phrase and select a button");
        }
        else
        {
            var stringReversed = ""; // initializes stringReversed variable and sets it to 0
            for(intCount = stringEntry.length - 1; intCount >= 0; intCount--) // intCount starts at the length of the input phrase, but - 1 as the condition is set to intCount >= 0. This means that the first character of stringReversed is the 9th character of stringEntry, which is at intCount = 8. It is then decremented after each character to move backwards through the phrase.
            {
                stringReversed = stringReversed + stringEntry.charAt(intCount); // accumulates the reversed input phrase as the loop moves backwards through the phrase
            }
            $("output").value = "The reverse of the phrase above is: \n\"" + stringReversed + "\"" //outputs reversed input phrase
        }
    }

var clear = function () //function clears input and output
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = ""; // sets input phrase to null onload of page
    $("output").value = ""; // sets input phrase to null onload of page
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  