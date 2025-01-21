function sum(a, b, c = 0) {
    return a + b + c;
}

// //alternatively we can assign a function to a varaible 
// const sum = function (a, b, c = 0) {
//     return a + b + c;
// } 

let sum1 = sum(2); // NaN
let sum2 = sum(2, 4); // 
let sum3 = sum(2, 4, 6);

console.log("sum1 = ", sum1);
console.log("sum2 = ", sum(2, 4));

console.log("sum3 = ", sum3);

/* arrow functions */
// arrow fn to return the product of the numbers passed
let multiply = (a, b = 1) => a * b;
console.log(multiply(3,4));

/* instead of returning a value, 
we can also make the function to execute some code */
const greet = (name) => {
    console.log("Hello " + name + "!!!");
}

greet("Shri")
