
                                        // ENUMERATORS
                                        
/*------------------------------------------------------------------------------------------
    1. An enum is a special "class" that represents a group of constants (unchangeable variables).
    2. Enums can either be string or numeric type.
    3. By default, Enums are numeric and initialize the first value as 0;

-------------------------------------------------------------------------------------------*/

enum  Days {
    // default first member will be at 0 and so on... 
    Monday = 1,        // but here we start from 1            
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let count: number = 0;
console.log(Days);
for(let i in Days){
    count++;
    i = i+2;
}

console.log(`There are ${count/2} Days in a week.`)   
// Count/2 as enums are stored bot as key:value and value:key form.

console.log(`Thursday is the ${Days.Thursday}th Day of the Week`);