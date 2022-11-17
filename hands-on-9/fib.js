//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

/* Main program function that accepts user input for the total number of the
/ Fibonacci series to show and the then runs a loop to create the output
*/

var generate = function () 
{
	var intAmount = parseInt($("total_fib").value);  //gets user input from the DOM
	
    if ((intAmount < 2) || (intAmount > 100) || (isNaN(intAmount))) // if the number input is < 2 or > 100, the following sequence will run.
    {
        $("total_fib").value = "";  // resets the input field to blank 
        $("error_msg").innerHTML = "Incorrect value. Enter a number >= 2 or <= 100."; // outputs an error msg below the input field
        $("output").value = ""; // sets the output field to null so that it does not output i and k for the first two numbers of the fibonacci sequence
                                // if the input is not valid.
    }
    else {
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
        $("error_msg").innerHTML = "";
	    var i=0;  // sets the first number in the Fibonacci series to 0
	    var j=1;  //sets the second number in the Fibonacci series to 1
	    var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	    stringOutput = []
            stringOutput[0] = "0"; // sets the first and second numbers of the Fibonacci sequence as the loop does not calculate those numbers.
            stringOutput[1] = "1";

        for(intCount = 3; intCount <= intAmount; intCount++) // for loop that starts on the 3rd number of the Fibonacci sequence, loops until intCount > intAmount
        {
            k = i + j             // adds i + j and sets it equal to k
            i = j                 // then sets i equal to j
            j = k                 // then sets j equal to the new k
            stringOutput.push(k); // pushes the new k out to the stringOutput array, starting with the 3rd number of the Fibonacci sequence
        }

        $("output").value = stringOutput  // outputs the stringOutput array to the textarea with id="output"

        }
} 


window.onload = function () 
{
    $("total_fib").value = "";      // sets initial value for the intAmount input field to null
    $("output").value = "";         // sets initial value for the disabled output field to null
    $("generate").onclick = generate; //runs the generate function when clicked
}  