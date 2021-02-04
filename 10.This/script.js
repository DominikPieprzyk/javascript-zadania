//Zadanie 1 

function Person(name, lastname, age, country, city){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }
  
    this.addOneYear = function(){
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.showDetails();
person.addOneYear();
person.showDetails();

var i = 0

while(i<4){
    person.addOneYear();
    i++;
}

person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

for(i; i>1; i--){
  person2.addOneYear();
}

person2.showDetails();


//Zadanie 2

function Person(name, lastname, age, country, city){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }
  
    this.addOneYear = function(){
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.favDishes = ['Pasta', 'Cake', 'Broccoli'];
person2.favDishes = ['Big Mac', 'French Fries', 'Ice cream'];

function printDishes(){
    console.log(this.favDishes);
}

function addDish(dish){
    this.favDishes.push(dish)
}

person.printDishes = printDishes;
person2.printDishes = printDishes;
person.addDish = addDish;
person2.addDish = addDish;

person.printDishes();
person2.addDish('Zinger');
person2.printDishes();

//Zadanie 3

function Calc(d, p){
    this.d = d;
    this.p = p;

    this.sum = function(){
        return(this.d + this.p);
    }

    this.sub = function(){
        return(this.d - this.p);
    }

    this.multi = function(){
        return(this.d * this.p);
    }

    this.div = function(){
        if(d === 0 || p === 0){
            console.log("You can not divide by 0.");
        }else{
            return(this.d / this.p);
        }
    }
}

const calc1 = new Calc(12, 4);
const calc2 = new Calc(-15, 6);
console.log(calc1.div());
console.log(calc2.sum());

//Zadanie 4

function Leadder(){
    this.level = 0;

    this.up = function()
    {
        this.level++;
    }

    this.down = function()
    {
        if(this.level > 0){
            this.level--;
        }else{
            console.log("You are on the bottom of the leadder.");
        }     
    }

    this.position = function()
    {
        console.log(this.level);
    }

}

var LeadderSimulator = new Leadder();

LeadderSimulator.position();
LeadderSimulator.up();
LeadderSimulator.position();
LeadderSimulator.down();
LeadderSimulator.position();
LeadderSimulator.down();
