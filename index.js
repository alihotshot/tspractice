"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkSteps = void 0;
var console_1 = require("console");
var inquirer_1 = require("inquirer");
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
var perso = {
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
//Loops - for loop
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
    var result = i_1++;
    console.log(result);
}
//for  - for of loop
var number = [1, 2, 3, 4, 5];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var num = number_1[_i];
    console.log(num);
}
//for - for in loop
var person = {
    name: 'Ali',
    age: 23,
    job: 'Engineer',
};
for (var key in person) {
    console.log(key);
    console.log(person[key]);
}
//while loop
var count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
//do-while loop
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 0);
//Modules export & import
var sportsman = 'Ali Haider';
exports.default = sportsman;
var walkSteps = function (step) {
    console.log("".concat(sportsman, " did ").concat(step));
};
exports.walkSteps = walkSteps;
//inquirer - get data/input from user on console - It's a Library
//install it from npm library and check in the package.json
var user = inquirer_1.default.prompt({
    type: 'input',
    name: 'username',
    message: 'What is your name?',
});
console.log(user);
// Inquirer (Input/Get Data)
// Commonjs
// ES(Latest Module) Vs CommonJS (Async vs sync)
// chalk(Library) - For Interactive user interface
// banner(console) - We can show banner by using this
// Tasks for this week!!
// 1. Create a modular calculator program using TypeScript. The program should take user input through the Inquirer library and implement various arithmetic operations (addition, subtraction, multiplication, division) as separate ES modules.
// 2. Create a quiz application using TypeScript and the Inquirer library. The program should take user input through Inquirer, implement a quiz with a variable number of questions, calculate the quiz score in separate ES module, and display the final result along with correct and incorrect user-given answers.
// Note: you can also use Chalk library for adding color to the console output.
// Union Type and Literals
var userAge = 'Declared Dead';
userAge = 55;
