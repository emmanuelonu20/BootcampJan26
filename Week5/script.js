//Object
let car = {make: 'Toyota', model: 'Corola', year: 2026, color: 'red'};
console.log(car['year']); //2026
console.log(car.year); //2026
console.log(car.model); //Corola

console.log(car);

car.year = 2024;

console.log(car);


//Array of objects
let cars = [
    {make: 'Toyota', model: 'Corola', year: 2026, color: 'red'},
    {make: 'Honda', model: 'Pilot', year: 2008, color: 'green'},
    {make: 'Kia', model: 'Elantra', year: 2022, color: 'blue'}
];

console.log(cars[1].color);
console.log(cars[0].year); //2026

function add(){

}


// Class
class Car {
    //properties
    make;
    model;
    year;
    color;

    //constructor
    constructor(_make, _model, _year, _color){
        this.make = _make;
        this.model = _model;
        this.year = _year;
        this.color = _color;
    }

    //methods
    getCarName(){
        return this.make + ' ' + this.model;
    }
}

let car1 = new Car("Toyota", "Highlander", 2023, 'Black');
console.log(car1.year);
console.log(car1.getCarName());