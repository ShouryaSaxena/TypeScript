/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:      Abstract classes and variables.
    Encapsulation:    Private, protected and public members.
    PolyMorphism:     Overloading and Overriding.
    Inheritance:      Only Single and Multi-Level inheritance occur in Typescript.
-----------------------------------------------------------------*/
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
var Details = /** @class */ (function () {
    function Details(name, city, age) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }
    Details.prototype.getFullAddress = function () {
        return "".concat(this.Name, ", ").concat(this.City, ", ").concat(this.Age);
    };
    return Details;
}());
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(name, city, age) {
        var _this = _super.call(this, name, city, age) || this;
        console.log("".concat(name, " belongs to ").concat(city, ", and is ").concat(age, "yrs old."));
        return _this;
    }
    return user;
}(Details));
//-------------------------Object Creation-----------------------------
var user1 = new user("Rajat", "Goa", 23);
var user2 = new user("Shilpi", "Ahmedabad", 24);
var user3 = new user("Astitva", "Jodhpur", 21);
function add(a, b) {
    return a + b;
}
console.log(add("Strings-", "Concatinated")); // calls function-1 & returns "Strings-Added".
console.log(add(5349, 1236)); // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.
/*-------------------------------Inheritance in Typescript------------------------------- */
//  1. Single inheritance: Derived class can inherit properties and behavior from at most one parent class.
//  2. Multilevel : Derived class inherits properties of another derived class which has inherited the properties of some parent class.
// Base (Parent) class........
var carModel = /** @class */ (function () {
    function carModel(model) {
        this.model = model;
    }
    carModel.prototype.Type = function (model) {
        console.log("\n".concat(model, " car section...."));
        return model;
    };
    return carModel;
}());
//---------------Single Inheriance------------------
var carName = /** @class */ (function (_super) {
    __extends(carName, _super);
    function carName(model, name) {
        var _this = _super.call(this, model) || this;
        _this.name = name;
        return _this;
    }
    carName.prototype.Brand = function (model, name) {
        this.Type(model);
        this.name = name;
        console.log("".concat(this.name, " is a ").concat(this.model, " Model."));
        return name;
    };
    return carName;
}(carModel));
//--------------------MultiLevel Inheritance---------------------
//Derived class carModel inherits another Derived class Car
//which has inherited the properties of the Parent class Vehicle...
var carPrice = /** @class */ (function (_super) {
    __extends(carPrice, _super);
    function carPrice(model, name, cost) {
        var _this = _super.call(this, model, name) || this;
        _this.cost = cost;
        return _this;
    }
    carPrice.prototype.Price = function (model, name, cost) {
        this.Brand(model, name);
        console.log("".concat(this.name, " worth ").concat(this.cost, " is not as costlier as other ").concat(this.model, " cars."));
        return cost;
    };
    return carPrice;
}(carName));
//-------------------Object creation-------------------------
var obj1 = new carName("F1 race", "Buggati");
obj1.Brand("F1 race", "Buggati");
var obj2 = new carPrice("Sports", "Polo GT", 1050000);
obj2.Price("Sports", "Polo GT", 1050000);
obj2.Price("Classic", "Jaguar", 31900000);
