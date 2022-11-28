//Task 1
var arrayNames = new Array("John", "Robert", "Jimmy", "Bonzo");

var arrayInstruments = [];
    arrayInstruments[0] = "bass";
    arrayInstruments[1] = "vocals";
    arrayInstruments[2] = "guitar";
    arrayInstruments[3] = "drums";

var stringMessage = ""
var intCount;


for(intCount = 0; intCount < arrayNames.length; intCount++)
{
    stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] + "\n";
}
alert(stringMessage);

//task 2

var stringTimesTable = "";

for(x = 1; x <= 12; x++)
{
    for(y = 1; y <= 12; y++)
    {
        stringTimesTable = stringTimesTable + " " + x*y;
    }
    stringTimesTable = stringTimesTable + "\n";
}
alert(stringTimesTable);

//task 3

var stringEvenTimesTable = "";
var arrayTimesTable = [];

for(x = 0; x < 12; x++)
{
    arrayTimesTable[x] = [];
    for(y = 0; y < 12; y++)
    {
        arrayTimesTable[x][y] = " " + (x+1)*(y+1);
    }
}

for(a = 0; a < 12; a++)
{
    if(arrayTimesTable[a][0] % 2 === 0)
    {
        stringEvenTimesTable = stringEvenTimesTable + arrayTimesTable[a] + "\n";
    }
}
alert(stringEvenTimesTable);