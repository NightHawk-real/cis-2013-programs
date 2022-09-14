var floatAge, floatDays, floatMonths, intFortnights, intWeeks;
    floatAge = parseFloat(prompt("Enter your age"));
    floatDays = floatAge * 365.25;
    floatMonths = floatAge * 12;
    intFortnights = floatDays / 14;
    intWeeks = floatDays / 7;
    alert("Age in years = " + floatAge);
    alert("Age in months = " + floatMonths);
    alert("Age in fortnights = " + intFortnights);
    alert("Age in weeks = " + intWeeks);
    alert("Age in days = " + floatDays);


