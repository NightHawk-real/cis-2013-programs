
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangeArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

	alert ("The Rectangle area is " + rectArea(floatRectHeight, floatRectWidth) + " and the perimeter is " + rectPerim(floatRectHeight, floatRectWidth) + "\n\n" +
		"The Triangle area is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3) + " and the perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3) + "\n\n" +
		"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));

};
/*
* Beginning of the Rectangle area and perimeter functions
* and calculations
*/

var calcRectArea = function()
{
    var floatRectHeight = parseFloat($("rect_height").value);
    var floatRectWidth = parseFloat($("rect_width").value);

    alert ("The Rectangle's area is " + rectArea(floatRectHeight, floatRectWidth));
};

function rectArea(floatRectHeight_par, floatRectWidth_par)
{
    var floatRectArea = parseFloat(floatRectHeight_par*floatRectWidth_par);
    return floatRectArea.toFixed(2);
};

var calcRectPerim = function()
{
    var floatRectHeight = parseFloat($("rect_height").value);
    var floatRectWidth = parseFloat($("rect_width").value);

    alert ("The Rectangle's perimeter is " + rectPerim(floatRectHeight, floatRectWidth));
};

function rectPerim(floatRectHeight_par, floatRectWidth_par)
{
    var floatRectPerim = parseFloat(2 * floatRectHeight_par + 2 * floatRectWidth_par);
    return floatRectPerim.toFixed(2);
};
/*
* Beginning of the Triangle area and perimeter functions
* and calculations
*/
var calcTriArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);

    alert ("The Triangle's area is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triangleArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatS = ((floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2);
    var floatTriangleArea = parseFloat(Math.sqrt(floatS*(floatS - floatTriSide1_par)*(floatS - floatTriSide2_par)*(floatS - floatTriSide3_par)))
    return floatTriangleArea.toFixed(2)
};

var calcTriPerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);

    alert ("The Triangle's perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function trianglePerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatTrianglePerim = parseFloat(floatTriSide1_par + floatTriSide2_par + floatTriSide3_par);
    return floatTrianglePerim.toFixed(2);
};
/*
* Beginning of the Circle area and perimeter functions
* and calculations
*/
var calcCircArea = function()
{
    var floatRadius = parseFloat($("radius").value);

    alert ("The Circle's area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par) 
{
    var floatCircleArea = parseFloat(Math.PI * Math.pow(floatRadius_par, 2));
    return floatCircleArea.toFixed(2);
};

var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
};

window.onload = function () 
{
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircArea;
    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTriPerim;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
};