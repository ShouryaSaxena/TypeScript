//--------------------------Generics in Typescript-------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
var output = identity("Generics in Typescript"); // String input will return string output.
console.log(output + "\ntype: ".concat(typeof (output), "\n"));
var output2 = identity(100); // number type input will give number type output.
console.log(output + "\ntype: ".concat(typeof (output), "\n"));
//-------------------------for Arrays--------------------------------------
function arrLength(arr) {
    console.log(arr.length);
    return arr;
}
var strArray = ["A", "B", "C", "D", "E"];
arrLength(strArray); //display the length of array.
var numArray = [1, 2, 3, 4, 5, 6, 7];
arrLength(numArray);
//---------------------------Generic Classes--------------------------------
var genClass = /** @class */ (function () {
    function genClass() {
    }
    return genClass;
}());
// all inputs and return type of genClass will be string.
var myGenClass1 = new genClass();
myGenClass1.Name = "Shourya";
myGenClass1.addFunc = function (x, y) {
    return x + y;
};
console.log(myGenClass1.addFunc("Hello ", myGenClass1.Name)); //concat both strings
//here, all inputs and return type of genClass will be number.
var myGenClass2 = new genClass();
myGenClass2.Name = 23;
myGenClass2.addFunc = function (x, y) {
    return x + y;
};
console.log(myGenClass2.addFunc(144, myGenClass2.Name)); // 144+23 = 167
function findLength(value) {
    console.log(value.length); // Now we know it has a .length property, so no more error
    return value;
}
//findLength(7);        //Error: type 'number not assignable to type 'getLength'.
findLength({ length: 7, value: 86 }); // no errors... length = 7.
//-----------------------Using Type Parameters in Generic Constraints-------------------
//keyof: this operator takes an object type and produces a string or numeric literal union of its keys
function getValue(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getValue(x, "a"); // no errors...returns 1
//getValue(x, "m");      -> Error: m isn't a key thus, "m" type args not can't be assigned to type declared.
//----------------------Using Class Types in Generics----------------------------
var boolOut = /** @class */ (function () {
    function boolOut() {
        this.hasBool = true;
    }
    return boolOut;
}());
var strOut = /** @class */ (function () {
    function strOut() {
        this.strTag = "Shourya";
    }
    return strOut;
}());
var Display = /** @class */ (function () {
    function Display() {
        this.num = 10;
    }
    return Display;
}());
var isBool = /** @class */ (function (_super) {
    __extends(isBool, _super);
    function isBool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.output = new boolOut();
        return _this;
    }
    return isBool;
}(Display));
var isString = /** @class */ (function (_super) {
    __extends(isString, _super);
    function isString() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.output = new strOut();
        return _this;
    }
    return isString;
}(Display));
function createInstance(c) {
    return new c();
}
console.log(createInstance(isString).output.strTag);
