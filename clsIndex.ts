// Union Literals and typeof
function cashWithdraw(amount: string | number | boolean) {
  if (typeof amount == 'string') {
    amount.toLowerCase()
  } else if (typeof amount == 'number') {
    amount / 100
  } else {
    !amount
  }
}

cashWithdraw('Thirty Thousand')
cashWithdraw(20000)

//Structural Typing
interface carModel {
  model: number
  milege: number
}

let BMW: carModel = {
  model: 2022,
  milege: 120,
}

let Audi: carModel = {
  model: 2022,
  milege: 120,
}

function EngineEfficiency(car: carModel) {
  let calculation = car.model * car.milege
  return calculation
}

EngineEfficiency(Audi)

interface MotorBike {
  model: number
  milege: number
  speed: number
}

let Honda: MotorBike = {
  model: 2023,
  milege: 120,
  speed: 400,
}

BMW = Honda

EngineEfficiency(Honda)

// Duck Example of Structural Typing

interface duck {
  canSwim: boolean
  canFly: boolean
}

// duck
let MyPet = (pet: duck) => {
  if (pet.canSwim == true && pet.canFly == true) {
    console.log('This is Duck')
  } else {
    console.log('This is not a Duck')
  }
}

let myDuck: duck = {
  canSwim: true,
  canFly: true,
}

MyPet(myDuck)

// dog
interface dog {
  canSwim: boolean
  canFly: boolean
}

let germanShep: dog = {
  canSwim: true,
  canFly: false,
}

myDuck = germanShep
germanShep = myDuck //As we know they are not equal.

MyPet(germanShep)

// Different Style of Initializing Variable and Datatypes
interface address {
  city: string
  [address: string]: any //Same as: [x:string] : any
}

let writeAddress: address = {
  city: 'Rawalpindi',
  Address: 'DK-319, Z-38, Street no 8',
}
