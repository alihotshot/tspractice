import { log } from 'console';
import inquirer from 'inquirer';
//Tuples
let tup = [25626, 'Testing', true];
//Tuple Array
let employee;
employee = [
    [1, 'Mansoob'],
    [2, 'Ali Haider'],
    [3, 'Nouman'],
    [4, 'Shehryar'],
];
console.log(employee[1]);
const perso = {
    firstName: 'Ali',
    lastName: 'Haider',
    age: 25,
};
//2 Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('Hello there...!!');
    }
}
const cat = new Animal('Cat');
cat.makeSound();
//3 Type Assertion
const cId = 25626;
const customerId = cId;
const clientId = cId;
//functions
function addNum(x, y) {
    let result = x + y;
    return result;
}
console.log(addNum(2, 5));
const mulNum = (a, b) => {
    return a * b;
};
console.log(mulNum(5, 5));
//Void or Union Type in Function
function LogMsg(message) {
    return message;
}
console.log(log('Hi'));
console.log(25626);
//Arrays
const fruits = ['Mango', 'Banana', 'Orange', 'Apple'];
//foreach in array
fruits.forEach((num) => {
    console.log(num);
});
const pushed = fruits.push('Strawberry'); //Add Array
const popped = fruits.pop(); //Remove Array
console.log(pushed, popped);
console.log(fruits);
const shift = fruits.shift();
console.log(fruits); // Shift Array
fruits.splice(2, 1, 'Umer', 'Ali', 'Ahmed');
console.log(fruits);
fruits.splice(2, 0, 'Learn');
console.log(fruits);
let slicArray = fruits.slice(1);
console.log(slicArray);
//shift & unshift
// push pop
//array annotations and doubled
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
class Labrador {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    makeSound() {
        console.log('Woof woof!');
    }
}
const german = new Labrador('German', 'France');
console.log(german.name, german.breed);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('***** Array ******');
// if else
const promptSync = require('prompt-sync')();
console.log('****** GRADES FORMULA ******');
let st_name = promptSync('Your Name = ');
let marks = promptSync('Your Obtained Marks = ');
const gradesFun = (marks) => {
    if (marks < 50) {
        console.log(`${st_name}- You Got Grade F - Work Hard`);
    }
    else if (marks >= 50 && marks < 60) {
        console.log(`${st_name}- You Got Grade C - Adequate`);
    }
    else if (marks >= 60 && marks < 80) {
        console.log(`${st_name}- You Got Grade B - Satisfactory`);
    }
    else if (marks >= 80 && marks < 100) {
        console.log(`${st_name}- You Got Grade A - Excellent`);
    }
};
let showGrades = gradesFun(marks);
console.log(showGrades);
//Loops - for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
    let result = i++;
    console.log(result);
}
//for  - for of loop
const number = [1, 2, 3, 4, 5];
for (const num of number) {
    console.log(num);
}
//for - for in loop
const person = {
    name: 'Ali',
    age: 23,
    job: 'Engineer',
};
for (const key in person) {
    console.log(key);
    console.log(person[key]);
}
//while loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
//do-while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 0);
//Modules export & import
const sportsman = 'Ali Haider';
export default sportsman;
export const walkSteps = (step) => {
    console.log(`${sportsman} did ${step}`);
};
//inquirer - get data/input from user on console - It's a Library
//install it from npm library and check in the package.json
let user = inquirer.prompt({
    type: 'input',
    name: 'username',
    message: 'What is your name?',
});
console.log(user);
let userAge = 'Declared Dead';
userAge = 55;
function cashWithdraw(amount) {
    // amount.toLowerCase() as it is giving error
    //here we need to narrowing the type | narrowing concept introduce here
    amount = 'Thirty thousand';
    amount.toLowerCase();
    amount = 30000;
    amount / 100;
    //another way
    // if(typeof ===){}
}
// ========== another example with existing datatypes
let newAge = Math.random() > 0.6 ? 'Khan' : 60;
// with Unions
let amount;
amount = 5000;
amount = '10K';
// amount = '50K' //Error bcz we declared more specific
//More Specific
let trafficeLight;
let newVariable;
let secVariable;
secVariable = null;
secVariable = undefined;
function studInfo(std) {
    std.name;
    std.age;
    std.gender;
}
//Nested Objects
let completeAddress = {
    hNo: 4,
    stNo: 18,
    city: 'Isb',
    postcode: 46000,
};
let teacher = {
    subject: 'Chemistry',
    Address: completeAddress,
};
// Create student registration form, Take info from inquirer, Make an ES Module, Use Union Literals & Type Alises
// Use Nested OBjects, and Display info by using Chalk and Banner Library
//inquirer 
let getRegData = await inquirer.prompt([{
        name: 
    }]);
//Nested Object
let stuAddress = {
    hno: 319,
    stNo: 18,
    city: 'Rawalpindi',
};
