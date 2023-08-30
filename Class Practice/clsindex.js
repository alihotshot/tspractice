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
var BMW = {
    model: 2022,
    milege: 120,
};
var Audi = {
    model: 2022,
    milege: 120,
};
function EngineEfficiency(car) {
    var calculation = car.model * car.milege;
    return calculation;
}
EngineEfficiency(Audi);
var Honda = {
    model: 2023,
    milege: 120,
    speed: 400,
};
BMW = Honda;
EngineEfficiency(Honda);
// duck
var MyPet = function (pet) {
    if (pet.canSwim == true && pet.canFly == true) {
        console.log('This is Duck');
    }
    else {
        console.log('This is not a Duck');
    }
};
var myDuck = {
    canSwim: true,
    canFly: true,
};
MyPet(myDuck);
var germanShep = {
    canSwim: true,
    canFly: false,
};
myDuck = germanShep;
germanShep = myDuck; //As we know they are not equal.
MyPet(germanShep);
var writeAddress = {
    city: 'Rawalpindi',
    Address: 'DK-319, Z-38, Street no 8',
};
//Case 1 : When both are same
var freshObject = { id: 50, firstName: 'Ali' };
var secondObject = { id: 66, firstName: 'Haider' };
freshObject = secondObject;
//Case 2 : When second one is different
var newObject = { firstName: 'Haider' };
newObject = freshObject;
// freshObject = newObject - Will show error
