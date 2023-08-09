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
function log(message) {
    return message;
}
console.log(log('Hi'));
console.log(25626);
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
//array annotations and doubled
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function (num) { return num * 2; });
console.log(doubled);
