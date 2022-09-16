var floatAge, floatDays, floatMonths, intFortnights, intWeeks;
    floatAge = parseFloat(prompt("Enter your age"));
    floatDays = floatAge * 365.25;
    floatMonths = floatAge * 12;
    intFortnights = floatDays / 14;
    intWeeks = floatDays / 7;
    alert(`Age in years = ${floatAge}\nAge in months = ${floatMonths}\nAge in fortnights = ${intFortnights}\nAge in weeks = ${intWeeks}\nAge in days = ${floatDays}`);