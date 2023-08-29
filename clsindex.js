"use strict";
// Union Literals and typeof
function cashWithdraw(amount) {
    if (typeof amount == 'string') {
        amount.toLowerCase();
    }
    else if (typeof amount == 'number') {
        amount / 100;
    }
    else {
        !amount;
    }
}
cashWithdraw('Thirty Thousand');
cashWithdraw(20000);
let BMW = {
    model: 2022,
    milege: 120,
};
let Audi = {
    model: 2022,
    milege: 120,
};
function EngineEfficiency(car) {
    let calculation = car.model * car.milege;
    return calculation;
}
EngineEfficiency(Audi);
let Honda = {
    model: 2023,
    milege: 120,
    speed: 400,
};
BMW = Honda;
EngineEfficiency(Honda);
// duck
let MyPet = (pet) => {
    if (pet.canSwim == true && pet.canFly == true) {
        console.log('This is Duck');
    }
    else {
        console.log('This is not a Duck');
    }
};
let myDuck = {
    canSwim: true,
    canFly: true,
};
MyPet(myDuck);
let germanShep = {
    canSwim: true,
    canFly: false,
};
myDuck = germanShep;
germanShep = myDuck; //As we know they are not equal.
MyPet(germanShep);
let writeAddress = {
    city: 'Rawalpindi',
    Address: 'DK-319, Z-38, Street no 8',
};
