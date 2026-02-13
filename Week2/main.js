console.log('Printing message from JS file.');

// Variables
var firstName = 'John';
var lastName = 'Wick';
let age = 56;

console.log(firstName, lastName);

// Data types
// String data type
var school = 'UofC';
var dept = "Computer Science";

//number data type
var n = 4;
var x = 2.6

// boolean data type
var isValid = true;
var hasError = false;

// Arithmetic Operators
//Add, Subtract, Mul, Div
//Add
console.log(n + x);

//Sub
console.log(n - x);

//Mul
console.log(n * x);

//Div
console.log(n / x);

// String methods
let address = '247 Bolton Street';
console.log(address.length); //17

let fullName = firstName + lastName; //concatenation
console.log(fullName); //JohnWick

console.log(firstName + n); //John4

//First name, last name, department

//My first name is -----
//My last name is -----
//My department is -----

console.log('My first name is ' + firstName); //My first name is Douglas


let a = 22;
let b = 10;
let t = a + b;
console.log(t);
let p = a - b;
console.log(p);
console.log(t/p);


// Array
let students = ['John', 'Jennifer', 'Peter', 'Jeffrey'];
// Index
console.log(students[1]); //Jennifer
console.log(students[0]); //John

students.push('Victoria'); //add a new item into array
console.log(students[4]); //Victoria

console.log(students.length); //5


// Control or IF statement
let f = 26;

if (f > 30) {
    console.log('This is a big number');
} else {
    console.log('This is a small number');
}

let color = 'pink';

if (color === 'yellow') {
    console.log('You are bright like the sun.')
} else if(color === 'pink') {
    console.log('You are very stylish');
} else if (color === 'blue') {
    console.log('You are very formal')
} else {
    console.log('Not sure about you.');
}

// Loop
//i the iteration variable
//i++ === i = i + 1
let result = 0;
for(let i = 1; i <= 10; i++) {
    result = result + i;
}

console.log('Sum of 1 to 10 = ', result);


//Loop through the items in an array
for (let i = 0; i < students.length; i++) {
    console.log('Student', i + 1, ' = ', students[i]);
}

// Function

function add(x, y) {
    return x + y;
}

function printNowDate(){
    console.log(new Date());
}

//parameter or argument to bring data into your function
//return statement to send data out of the function

let res1 = add(45, 12);
console.log('res1 = ', res1);

let res2 = add(-90, 66);
console.log('res2 = ', res2);

printNowDate()