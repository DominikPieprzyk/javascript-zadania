//Zadanie 1 

var car = {
    name : 'Audi',
    model: 'B5 A4',
    power: '110HP',
    color: 'Metalic Black'
};

console.log(car);

//Zadanie 2

car.changeName = function(change){
    this.name = change;
}

car.changeName('Volkswagen');
console.log(car);

//Zadanie 3

let  outcome = {
    sum = function(arr){
        this.sum = arr.reduce((d, p) => d + p);
    }
}

outcome.sum([4, 5, 1, 2, 3]);
console.log(outcome);

//Zadanie 4

const car = {
    name: 'Audi',
    age: 15,
    color: 'Red',
    model: '90'
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

//Zadanie 5

const car = {
    name: 'Volkswagen',
    age: 5,
    color: 'Magenta',
    model: 'Mk2 golf gti'
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

//Zadanie 6

const car = {
    name = 'Bmw',
    age: 3,
    color: 'Perla White',
    model: 'M3'
}

car.owners = 3;

car.hello = function(){
    console.log("hello");
}
car.hello();
