// ENUMERATORS
/*------------------------------------------------------------------------------------------
    1. An enum is a special "class" that represents a group of constants (unchangeable variables).
    2. Enums can either be string or numeric type.
    3. By default, Enums are numeric and initialize the first value as 0;

-------------------------------------------------------------------------------------------*/
var Days;
(function (Days) {
    // default first member will be at 0 and so on... 
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
var count = 0;
console.log(Days);
for (var i in Days) {
    count++;
    i = i + 2;
}
console.log("There are ".concat(count / 2, " Days in a week."));
// Count/2 as enums are stored bot as key:value and value:key form.
console.log("Thursday is the ".concat(Days.Thursday, "th Day of the Week"));
