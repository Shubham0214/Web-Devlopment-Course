let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start());


function Person(name,age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe",20);

console.log(john.name);

function Animal(type)
{
    this.type = type
}

Animal.prototype.speak = function()
{
    return `${this.type} make a sound`
}

Array.prototype.shubh = function()
{
    return `Custom method ${this}`;
}

let myArray = [1,2,3]
// console.log(myArray.shubh());
let myNewArray = [1,2,3,4,5,6]
// console.log(myNewArray.shubh());


class Vehicle{
    constructor(make , model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive()
    {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyoto" , "Corolla");
console.log(myCar.start());
console.log(myCar.drive());


let vehOne = new Vehicle("Toyota","Corolla");
console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){
        return `$ {this.#balance}`;
    }
}

let account = new BankAccount()
// console.log(account.getBalance());


// Abstraction - hide the 

class CoffeeMachine{
    start()
    {
        //call DB
        //filter value
        return `Starting the machine...`;
    }

    brewCoffee(){
        return `Brewing coffee`
    }

    pressStartButton()
    {
        this.start();
        this.brewCoffee();
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton()); // undefined


//Polymorphism

class Bird{
     fly()
     {
        return 'Flying...'
     }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static
class Calculator{
    add(a,b){
        return a+b;
    }
}

let calculator = new Calculator();
console.log(calculator.add(2,3));

// Getter and Setters

class Employee{
    constructor(name,salary)
    {
        this.name = name
        this._salary = salary
    }
}

let emp = new Employee("Shubh",50000);
console.log(emp._salary);
