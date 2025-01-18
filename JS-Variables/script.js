// variables in JavaScript
var a = 3;
var b = 4.5;
var c = "5";

// arithmetic operations
console.log(a + b); // 7.5
console.log(a + c); // 35

// variable name can start with a '$' symbol or an underscore('_')
var $name = "shrivatsa";
var _age = 23;
console.log($name); // shrivatsa
console.log(_age); // 23

var num1 = 99;
num1 = num1 + 1;
console.log(num1); // 100
const PI = 3.14;
// PI = PI + 1.5; // Uncaught TypeError: Assignment to constant variable.

// var Vs let
console.log("var Vs let");
console.log("x = " + x);
console.log("Outside the block");

console.log("Checking for x")
var x = 8;
var x = 9; // redeclaration possible with var
// a block
{
    console.log(x); // 9
    x = x + 1;
}
console.log(x); // 10

console.log("Checking for y");
let y = 20;
// let y = 25; // error, cannot be redeclared
{   
    // console.log(y); // ReferenceError
    // creates a new name y scoped within the following block
    let y = 25;
    console.log(y); // 25
}
console.log(y); // 20

console.log("Checking for z")
let z = 0;
// a block
{   
    console.log(z); // 0
    z = z + 5;      // updating the value of globally scoped z
    console.log(z); // 5
}
console.log(z); // 5

console.log("Checking for m");

{
    var m = 45;
}
console.log(m); // 45

// JavaScript literals
let p = 3;
let q = 1.45;
let flag = true;
let mssg = "Hello World";
let r = undefined;
let s = null;

console.log(typeof p); // number
console.log(typeof q); // number
console.log(typeof flag); // boolean
console.log(typeof mssg); // string
console.log(typeof r); // undefined
console.log(typeof s); // object

// a function can be called before defining due to JS Hoisting
sayFoo();

function sayFoo() {
    console.log("Foo...");
}

console.log("JavaScript Objects:");

let employee = {

    name: "Shrivatsa",

    age: 23,

    "job profile": "Software Developer",

    // the value in turn can be an object
    address: {
        country: "India",
        city: "Bengaluru",
        pin: 576234
    },

    isGraduate: true,
}

console.log(employee)

// updating existing property 
employee.age = employee.age + 1;
// adding a new property
employee.email = "shrivatsashetty@example.com";

console.log(employee);
