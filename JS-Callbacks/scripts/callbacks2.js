/* a function that can perform any arithmetic operations using callbacks */
function calculate(a, b, operation) {
    return operation(a, b);
}

/* here are our basic arithemtic operations */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

/* checking results */
let num1 = 5;
let num2 = 2;

let sum = calculate(num1, num2, add)
console.log(sum); // 7

let difference = calculate(num1, num2, subtract);
console.log(difference); // 3

let product = calculate(num1, num2, multiply);
console.log(product); // 10

let quotient = calculate(num1, num2, divide);
console.log(quotient); // 2.5
