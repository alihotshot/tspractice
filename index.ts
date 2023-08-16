import { log } from 'console'

//Tuples
let tup: [number, string, any] = [25626, 'Testing', true]

//Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Mansoob'],
  [2, 'Ali Haider'],
  [3, 'Nouman'],
  [4, 'Shehryar'],
]

console.log(employee[1])

//1 Type
type Person = {
  firstName: string
  lastName: string
  age: number
}

const person: Person = {
  firstName: 'Ali',
  lastName: 'Haider',
  age: 25,
}

//2 Class
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound() {
    console.log('Hello there...!!')
  }
}

const cat = new Animal('Cat')
cat.makeSound()

//3 Type Assertion
const cId: any = 25626
const customerId = cId as string
const clientId = cId as number

//functions
function addNum(x: number, y: number) {
  let result: number = x + y
  return result
}
console.log(addNum(2, 5))

const mulNum = (a: number, b: number) => {
  return a * b
}
console.log(mulNum(5, 5))

//Void or Union Type in Function
function LogMsg(message: string | number) {
  return message
}
console.log(log('Hi'))
console.log(25626)

//Arrays
const fruits: string[] = ['Mango', 'Banana', 'Orange', 'Apple']

//foreach in array

fruits.forEach((num) => {
  console.log(num)
})

const pushed = fruits.push('Strawberry') //Add Array
const popped = fruits.pop() //Remove Array

console.log(pushed, popped)
console.log(fruits)

const shift = fruits.shift()
console.log(fruits) // Shift Array

fruits.splice(2, 1, 'Umer', 'Ali', 'Ahmed')
console.log(fruits)

fruits.splice(2, 0, 'Learn')
console.log(fruits)

let slicArray = fruits.slice(1)
console.log(slicArray)

//shift & unshift
// push pop

//array annotations and doubled
const numbers: number[] = [1, 2, 3, 4]
const doubled = numbers.map((num) => num * 2)
console.log(doubled)

// Extending Interfaces
interface Animal {
  name: string
  readonly color?: string //Optional and Readonly
  makeSound(): void
}

interface Dog extends Animal {
  breed: string
}

class Labrador implements Dog {
  name: string
  breed: string
  constructor(name: string, breed: string) {
    this.name = name
    this.breed = breed
  }
  makeSound() {
    console.log('Woof woof!')
  }
}

const german = new Labrador('German', 'France')
console.log(german.name, german.breed)

// interfaces can be used to define the structure of functions, including their parameter types and return type.
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y
const sub: MathFunc = (x: number, y: number) => x - y

console.log('***** Array ******')

// if else

const promptSync = require('prompt-sync')()
console.log('****** GRADES FORMULA ******')

let st_name: string = promptSync('Your Name = ')
let marks: number = promptSync('Your Obtained Marks = ')

const gradesFun = (marks: number) => {
  if (marks < 50) {
    console.log(`${st_name}- You Got Grade F - Work Hard`)
  } else if (marks >= 50 && marks < 60) {
    console.log(`${st_name}- You Got Grade C - Adequate`)
  } else if (marks >= 60 && marks < 80) {
    console.log(`${st_name}- You Got Grade B - Satisfactory`)
  } else if (marks >= 80 && marks < 100) {
    console.log(`${st_name}- You Got Grade A - Excellent`)
  }
}

let showGrades = gradesFun(marks)
console.log(showGrades)

//Modules export & import
export const walkSteps = (step: number) => {
  console.log(step)
}
