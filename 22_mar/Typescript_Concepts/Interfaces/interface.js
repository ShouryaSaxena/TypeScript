/*-------------------------------------------------------------------------------------------

    1. Interfaces define properties, methods, and events, which are the members of the interface.
    2. Interfaces contain only the declaration of the members.
    3. Interfaces are similar to Type Alias but are only applied to Object types.

---------------------------------------------------------------------------------------------*/
/*
let stud: Details = {                     // This will throw an error as the object has missing arguments as it's interface has.
    name: `Rohan Nanda`,
    age: 27,
}
*/
var user = {
    name: "Rakesh Sharma",
    age: 31,
    gender: "Male"
};
console.log(user);
var user1 = {
    name: "Kalpana Chawla",
    gender: "Female",
    age: 27
};
console.log(user1);
var stud = {
    name: "Rajesh Khanna",
    age: 52,
    gender: "Male",
    hobbies: "Acting"
};
console.log(stud);
