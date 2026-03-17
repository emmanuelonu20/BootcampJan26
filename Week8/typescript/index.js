var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// string
var fullName = 'John Wick';
console.log(fullName);
//number
var age;
age = 45;
// Boolean
var isValid = false;
// Any
var x;
x = 23;
x = 'zzz';
x = true;
// Undefined
var y;
y = undefined;
//null
var a;
a = null;
//function
function add(a, b) {
    return a + b;
}
console.log(add(23, 67));
// User-defined data type
var studentNames = ['Jennifer', 'John', 'Jane', 'James'];
// Object
var student = { name: 'Peter Pan', department: 'Comp Sci', age: 20 };
console.log(student.department); //Comp Sci
//Array of objects
var students = [
    { name: 'Peter Pan', department: 'Comp Sci', age: 20 },
    { name: 'Victoria Benneth', department: 'Music', age: 22 },
    { name: 'James Bond', department: 'French', age: 23 },
];
//Class
var Student = /** @class */ (function () {
    //constructor
    function Student(fullName, dept, age) {
        this.name = fullName;
        this.department = dept;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student("Jane Cross", 'Music', 44);
console.log(student1);
//Inheritance
var UndergradStudent = /** @class */ (function (_super) {
    __extends(UndergradStudent, _super);
    function UndergradStudent(fullName, dept, age, country) {
        var _this = _super.call(this, fullName, dept, age) || this;
        _this.country = country;
        return _this;
    }
    return UndergradStudent;
}(Student));
var student2 = new UndergradStudent('Colin Melon', 'Ecnomics', 55, 'Brazil');
console.log(student2);
