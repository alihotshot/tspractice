"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkSteps = void 0;
var console_1 = require("console");
//Tuples
var tup = [25626, 'Testing', true];
//Tuple Array
var employee;
employee = [
    [1, 'Mansoob'],
    [2, 'Ali Haider'],
    [3, 'Nouman'],
    [4, 'Shehryar'],
];
console.log(employee[1]);
var person = {
    firstName: 'Ali',
    lastName: 'Haider',
    age: 25,
};
//2 Class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('Hello there...!!');
    };
    return Animal;
}());
var cat = new Animal('Cat');
cat.makeSound();
//3 Type Assertion
var cId = 25626;
var customerId = cId;
var clientId = cId;
//functions
function addNum(x, y) {
    var result = x + y;
    return result;
}
console.log(addNum(2, 5));
var mulNum = function (a, b) {
    return a * b;
};
console.log(mulNum(5, 5));
//Void or Union Type in Function
function LogMsg(message) {
    return message;
}
console.log((0, console_1.log)('Hi'));
console.log(25626);
//Arrays
var fruits = ['Mango', 'Banana', 'Orange', 'Apple'];
//foreach in array
fruits.forEach(function (num) {
    console.log(num);
});
var pushed = fruits.push('Strawberry'); //Add Array
var popped = fruits.pop(); //Remove Array
console.log(pushed, popped);
console.log(fruits);
var shift = fruits.shift();
console.log(fruits); // Shift Array
fruits.splice(2, 1, 'Umer', 'Ali', 'Ahmed');
console.log(fruits);
fruits.splice(2, 0, 'Learn');
console.log(fruits);
var slicArray = fruits.slice(1);
console.log(slicArray);
//shift & unshift
// push pop
//array annotations and doubled
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function (num) { return num * 2; });
console.log(doubled);
var Labrador = /** @class */ (function () {
    function Labrador(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    Labrador.prototype.makeSound = function () {
        console.log('Woof woof!');
    };
    return Labrador;
}());
var german = new Labrador('German', 'France');
console.log(german.name, german.breed);
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
console.log('***** Array ******');
// if else
var promptSync = require('prompt-sync')();
console.log('****** GRADES FORMULA ******');
var st_name = promptSync('Your Name = ');
var marks = promptSync('Your Obtained Marks = ');
var gradesFun = function (marks) {
    if (marks < 50) {
        console.log("".concat(st_name, "- You Got Grade F - Work Hard"));
    }
    else if (marks >= 50 && marks < 60) {
        console.log("".concat(st_name, "- You Got Grade C - Adequate"));
    }
    else if (marks >= 60 && marks < 80) {
        console.log("".concat(st_name, "- You Got Grade B - Satisfactory"));
    }
    else if (marks >= 80 && marks < 100) {
        console.log("".concat(st_name, "- You Got Grade A - Excellent"));
    }
};
var showGrades = gradesFun(marks);
console.log(showGrades);
//Modules export & import
var walkSteps = function (step) {
    console.log(step);
};
exports.walkSteps = walkSteps;
