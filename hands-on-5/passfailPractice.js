var $ = function(id)
    {
        return document.getElementById(id);
    };

var calculate = function()
{
    var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value)
    floatMidPts = parseFloat(prompt("Please enter your Mid-term points (0-35):"));
    floatFinPts = parseFloat(prompt("Please enter your Final exam points (0-35):"));
        
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt(prompt("Please enter your preferred grading option (1 for audit, 2 for letter grade)"));
 
if (intGradeOption === 1)
{
    if (floatTotalPts >= 80)
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
    if (floatTotalPts >= 90)
    {
        stringFinalGrade = "A";
    }
    else
    {
        if (floatTotalPts >= 80 && floatTotalPts < 90)
        {
            stringFinalGrade = "B";
        }
        else
        {
            if (floatTotalPts >= 70 && floatTotalPts < 80)
            {
                stringFinalGrade = "C";
            }
            else
            {
                if (floatTotalPts >= 60 && floatTotalPts < 70)
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

$("final_grade_output").value = stringFinalGrade;
$("hw_pts_output").value = floatHwPts;

}


window.onload = function()
{
    $("hw_pts").value = ""
    $("hw_pts").focus();
    $("calculate").onclick = calculate
}




