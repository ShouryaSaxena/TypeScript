
/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:      Abstract classes and variables.
    Encapsulation:    Private, protected and public members.
    PolyMorphism:     Overloading and Overriding.
    Inheritance:      Only Single and Multi-Level inheritance occur in Typescript.
-----------------------------------------------------------------*/

abstract class Details {               // Abstract class Details. We cannot create instances of any abstract class.    
    private Name: string;
    private City: string;
    protected Age: number;               // Encapsulation provides a safety to the members of class. Private members cannot be accessed outside the class.

    constructor(name: string, city: string, age: number) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }

    public getFullAddress(): string {
        return `${this.Name}, ${this.City}, ${this.Age}`;
    }
}

class user extends Details {
    constructor(name: string, city: string, age: number) {       //Polymorphism helps in overloading and overriding a method or function.
        super(name, city, age);        //parent class members can be accessed using super keyword.
        console.log(`${name} belongs to ${city}, and is ${age}yrs old.`)
    }

}

//-------------------------Object Creation-----------------------------

let user1 = new user("Rajat", "Goa", 23);
let user2 = new user("Shilpi", "Ahmedabad", 24);
let user3 = new user("Astitva", "Jodhpur", 21);


//-----------------------Function Overloading in TS---------------------------

//function-1
function add(str1: string, str2: string): string;       // Concatination of two Strings.

//function-2
function add(num1: number, num2: number): number;      // Addition of two Numbers.

function add(a: any, b: any): any {
    return a + b;
}

console.log(add("Strings-", "Concatinated")); // calls function-1 & returns "Strings-Added".
console.log(add(5349, 1236));              // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.


/*-------------------------------Inheritance in Typescript------------------------------- */

//  1. Single inheritance: Derived class can inherit properties and behavior from at most one parent class.
//  2. Multilevel : Derived class inherits properties of another derived class which has inherited the properties of some parent class.


// Base (Parent) class........
class carModel {
    public model: string;
    constructor(model: string) {
        this.model = model;
    }
    Type(model: string): string {
        console.log(`\n${model} car section....`)
        return model;
    }
}

//---------------Single Inheriance------------------

class carName extends carModel {        //derived class car inherites Parent class Vehicle.
    protected name: string;
    constructor(model: string, name: string) {
        super(model);
        this.name = name;
    }
    Brand(model: string, name: string): string {
        this.Type(model);
        this.name = name;
        console.log(`${this.name} is a ${this.model} Model.`);
        return name;
    }
}

//--------------------MultiLevel Inheritance---------------------

//Derived class carModel inherits another Derived class Car
//which has inherited the properties of the Parent class Vehicle...

class carPrice extends carName {
    private cost: number;
    constructor(model: string, name: string, cost: number) {
        super(model, name);
        this.cost = cost;
    }
    Price(model: string, name: string, cost: number): number {
        this.Brand(model, name);
        console.log(`${this.name} worth ${this.cost} is not as costlier as other ${this.model} cars.`);
        return cost;
    }
}

//-------------------Object creation-------------------------

let obj1 = new carName("F1 race", "Buggati");
obj1.Brand("F1 race", "Buggati");

let obj2 = new carPrice("Sports", "Polo GT", 1050000);
obj2.Price("Sports", "Polo GT", 1050000);
obj2.Price("Classic", "Jaguar", 31900000);