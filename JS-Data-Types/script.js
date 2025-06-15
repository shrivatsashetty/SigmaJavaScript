// let x;
// console.log(x); // undefined
// x = 5;
// console.log(x); // 5 
// x = "Namaste World!!!";
// console.log(x); // Namaste World!!!
// x = null; // emptying the value inside the variable
// console.log(x); // null

console.log(typeof "John")// string
console.log(typeof 3.14)// number
console.log(typeof 33)// number
console.log(typeof (32e4))// number
console.log(typeof true)// boolean
console.log(typeof 1234n)// bigint
console.log(typeof Symbol())// symbol
console.log(typeof x)// undefined
console.log(typeof [1, 2, 3])// object
console.log(typeof new Date())// object

/* bigint data type */
let bigIntExample = BigInt("123456789012345678901234567890");
console.log(bigIntExample) // 123456789012345678901234567890n

console.log(typeof [1, 2, 3]); // object
console.log(typeof null); // object // this is a classic bug in JavaScript, null should have been it's own data type


function myFunc() {
    console.log("Hello World!!!");
}

console.log(typeof myFunc) // function

/* to check wether an object is an array */

const fruitsArr = ["apple", "banana", "orange"]; // an array of fruits

const fruitsObj = {apple: "apple", banana: "banana", orange: "orange"}; // a fruit object

console.log(Array.isArray(fruitsArr)); // true
console.log(fruitsArr instanceof Array); // true

console.log(Array.isArray(fruitsObj)); // false
console.log(fruitsObj instanceof Object); // true


const dateTimeNow = new Date();
console.log(dateTimeNow); // 2025-06-14T17:14:22.060Z
console.log(typeof dateTimeNow) // object
console.log(dateTimeNow instanceof Date); // true

/* calling Date() constructor without using new keyword 
returns a the current date time as a string
*/

let now = Date();
console.log(now); // Sat Jun 14 2025 23:32:29 GMT+0530 (India Standard Time)
console.log(now instanceof Date);
console.log(now instanceof String);
console.log(typeof now);

/* difference between primitive string and string objects in JavaScript */
let primitiveStr = "foo";
let strObj = new String("foo");

console.log(primitiveStr == strObj);
console.log(primitiveStr === strObj);
