var $ = function (id) 
{
    return document.getElementById(id);
}

 var calculate = function()
 {
    var floatMonthlyPayment, intLoanTerm, floatTotalCost
    floatMonthlyPayment = parseFloat($("monthly_cost").value);
    intLoanTerm = parseInt($("subscription_length").value);
    floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
    $("total_cost").value = floatTotalCost;
 }
 
 window.onload = function () 
{
    $("subscription_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_cost").focus();
}