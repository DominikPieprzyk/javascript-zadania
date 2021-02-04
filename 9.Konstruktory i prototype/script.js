//Zadanie 1 

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
   
    newCity(city){
        this.city = city;
    }

    newAge(age){
        this.age = age;
    }
}

const personA = new Person('Micheal', 'Well', 34,'USA','New York','English');
const personB = new Person('Gioviani', 'Bella', 54,'Italy','Roma','Italian');
const personC = new Person('Marcin', 'Najman', 41,'Poland','Czestochowa','Unknown');
const personD = new Person('Man', 'Mannish', 20,'MaleLand','Male Kingdom','Mannishan');
const personE = new Person('Name', 'LastName', 23,'Country','City','LAnguage');

personE.newAge(210);
personB.newAge(90);
personE.newCity('Known');

console.log(personB);
console.log(personA);
console.log(personC);

//Zadanie 2

class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }

    sum(x, y){
        this.result = x + y;
        this.toHistory(x, y, '+');
        return this.result;
    }

    substraction(x, y){
        this.result= x - y;
        this.toHistory(x, y, '-');
        return this.result;
    }

    multi(x, y){
        this.result = x* y;
        this.toHistory(x, y, '*');
        return this.result;
    }

    divis(x, y){
        if(y === 0 || x === 0) throw Error("It is not possible.");
        this.result = x / y;
        this.toHistory(x, y, '/');
        return this.result;
    }
    
    saveToMemory(){
        this.memory = this.result;
    }

    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory);
    }

    toHistory(x, y, operation){
        this.history.push({x, y, operation, result: this.result})
    }

    flushHistory(){
        this.history = [];
    }

    printHistory(){
        this.history.forEach((obj, d) => console.log(`${d}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }

}

//Zadanie 3

function RandNum() {
	this.changeNumber = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}

const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();
