// string
let fullName: string = 'John Wick';
console.log(fullName);

//number
let age: number;
age = 45;

// Boolean
let isValid: boolean = false;

// Any
let x: any;
x = 23;
x = 'zzz';
x = true;

// Undefined
let y: undefined
y = undefined;

//null
let a: null;
a = null;

//function
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(23, 67));


// User-defined data type

let studentNames: string[] = ['Jennifer', 'John', 'Jane', 'James'];


// Object
let student: IStudent = {name: 'Peter Pan', department: 'Comp Sci', age: 20};
console.log(student.department); //Comp Sci

//Array of objects
let students: IStudent[] = [
    {name: 'Peter Pan', department: 'Comp Sci', age: 20},
    {name: 'Victoria Benneth', department: 'Music', age: 22},
    {name: 'James Bond', department: 'French', age: 23},
];

// Interface
interface IStudent {
    name: string;
    department: string;
    age: number;
}

//Class
class Student {
    //properties
    name: string;
    department: string;
    age: number;

    //constructor
    constructor(fullName: string, dept: string, age: number){
        this.name = fullName;
        this.department = dept;
        this.age = age;
    }

    //methods
}

let student1 = new Student("Jane Cross", 'Music', 44);
console.log(student1);

//Inheritance
class UndergradStudent extends Student implements IStudent{
    country: string;

    constructor(fullName: string, dept: string, age: number, country: string){
        super(fullName, dept, age);
        this.country = country;
    }
}

let student2 = new UndergradStudent('Colin Melon', 'Ecnomics', 55, 'Brazil');
console.log(student2);