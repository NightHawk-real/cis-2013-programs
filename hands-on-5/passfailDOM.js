
    //Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade
var $ = function (id) 
{
    return document.getElementById(id);
}

var calculate = function()
{
   var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
   floatHwPts = parseFloat($("hw_pts").value);
   floatMidPts = parseFloat($("midterm_pts").value);
   floatFinPts = parseFloat($("fin_pts").value);
   floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
   intGradeOption = parseInt($("grade_option").value);

if (intGradeOption === 1)
{
    if(floatTotalPts >= 80) 
    {
        stringFinalGrade = "Pass";
    }
        else 
        {
            stringFinalGrade = "Fail";
        }
    } 
else  
{
    if(floatTotalPts >= 90) 
    {
        stringFinalGrade = "A";
    }
        else
            {
                if(floatTotalPts >= 80 && floatTotalPts < 90) 
                {
                    stringFinalGrade = "B";
                }
                else
                {
                    if(floatTotalPts >= 70 && floatTotalPts < 80) 
                    {
                         stringFinalGrade = "C";
                    }
                    else {
            
                        if(floatTotalPts >= 60 && floatTotalPts < 70) 
                        {
                            stringFinalGrade = "D";
                        }
                        else
                            {
                            stringFinalGrade = "F";
                            }
                        }
                }
            }
}

$("final_grade").value = stringFinalGrade; 

}

function limiter(limit) {
    if ($("hw_pts").value < 0) $("hw_pts").value = 0;
    if ($("hw_pts").value > 30) $("hw_pts").value = 30;
    if ($("midterm_pts").value < 0) $("midterm_pts").value = 0;
    if ($("midterm_pts").value > 35) $("midterm_pts").value = 35;
    if ($("fin_pts").value < 0) $("fin_pts").value = 0;
    if ($("fin_pts").value > 35) $("fin_pts").value = 35;
    if ($("grade_option").value < 1) $("grade_option").value = 1;
    if ($("grade_option").value > 2) $("grade_option").value = 2;
}   

window.onload = function () 
{
    $("hw_pts").value = "";
    $("midterm_pts").value = "";
    $("fin_pts").value = "";
    $("calculate").onclick = calculate;
    $("hw_pts").focus();
}