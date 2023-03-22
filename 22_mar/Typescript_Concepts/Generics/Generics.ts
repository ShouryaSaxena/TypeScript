

//--------------------------Generics in Typescript-------------------------

function identity<Type>(arg: Type): Type {   //basic syntax for generic func.
    return arg;
}

let output = identity<string>("Generics in Typescript");     // String input will return string output.
console.log(output + `\ntype: ${typeof (output)}\n`);

let output2 = identity<number>(100);                    // number type input will give number type output.
console.log(output + `\ntype: ${typeof (output)}\n`);


//-------------------------for Arrays--------------------------------------

function arrLength<T>(arr: T[]): T[] {              // Type or T, both works the same.
    console.log(arr.length);
    return arr;
}

let strArray = ["A", "B", "C", "D", "E"];
arrLength(strArray);                           //display the length of array.

let numArray = [1, 2, 3, 4, 5, 6, 7];
arrLength(numArray);


//---------------------------Generic Classes--------------------------------

class genClass<Type> {
    Name: Type | undefined;
    addFunc: ((x: Type, y: Type) => Type) | undefined;
}

// all inputs and return type of genClass will be string.
let myGenClass1 = new genClass<string>();
myGenClass1.Name = "Shourya";
myGenClass1.addFunc = function (x, y) {
    return x + y;
};

console.log(myGenClass1.addFunc("Hello ", myGenClass1.Name));    //concat both strings


//here, all inputs and return type of genClass will be number.
let myGenClass2 = new genClass<number>();
myGenClass2.Name = 23;
myGenClass2.addFunc = function (x, y) {
    return x + y;
};
console.log(myGenClass2.addFunc(144, myGenClass2.Name));   // 144+23 = 167



//----------------------------Generic Constraints----------------------------

interface getLength {           // interface will act like a constraint for below function when extended.
    length: number;
}

function findLength<Type extends getLength>(value: Type): Type {    //type extends an interface.
    console.log(value.length);            // Now we know it has a .length property, so no more error
    return value;
}

//findLength(7);        //Error: type 'number not assignable to type 'getLength'.

findLength({ length: 7, value: 86 });    // no errors... length = 7.




//-----------------------Using Type Parameters in Generic Constraints-------------------

//keyof: this operator takes an object type and produces a string or numeric literal union of its keys

function getValue<Type, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(obj[key]);
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getValue(x, "a");        // no errors...returns 1

//getValue(x, "m");      -> Error: m isn't a key thus, "m" type args not can't be assigned to type declared.




//----------------------Using Class Types in Generics----------------------------

class boolOut {
    hasBool: boolean = true;
}

class strOut {
    strTag: string = "Shourya";
}

class Display {
    num: number = 10;
}

class isBool extends Display {
    output: boolOut = new boolOut();
}

class isString extends Display {
    output: strOut = new strOut();
}

function createInstance<Type extends Display>(c: new () => Type): Type {
    return new c();
}

console.log(createInstance(isString).output.strTag);
