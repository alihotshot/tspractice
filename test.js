"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var user = inquirer_1.default.prompt({
    type: 'input',
    name: 'userName',
    message: 'What is your name?',
});
console.log(user);
