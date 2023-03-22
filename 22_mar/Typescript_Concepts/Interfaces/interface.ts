

/*-------------------------------------------------------------------------------------------

    1. Interfaces define properties, methods, and events, which are the members of the interface.
    2. Interfaces contain only the declaration of the members.
    3. Interfaces are similar to Type Alias but are only applied to Object types.

---------------------------------------------------------------------------------------------*/

interface Details{
    name: string,
    age: number,
    gender: string
}
/*
let stud: Details = {                     // This will throw an error as the object has missing arguments as it's interface has.
    name: `Rohan Nanda`,
    age: 27,
}
*/
let user: Details = {
    name: "Rakesh Sharma",
    age: 31,
    gender: "Male",
    
}
console.log(user);

let user1: Details = {                   // The declaration of the arguments (pattern/sequence) can be different.
    name: `Kalpana Chawla`,
    gender: `Female`,
    age: 27
}
console.log(user1);


interface otherDetails extends Details {        // one interface can inherit other interface
    hobbies: string
}

let stud: otherDetails = {            // child interface holds all the properties of it's parent interface as well.
    name: "Rajesh Khanna",
    age: 52,
    gender: "Male",
    hobbies: "Acting"
}
console.log(stud);

