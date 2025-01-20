console.log("JavaScript Operators!!!");

// arithmetic operator
let a = 3;
let b = 2;

console.log("Arithmetic Operators");
/* arithmetic operators */
// multiplication
console.log(a * b);
// decimal point division
console.log(a / b);
// exponentiation 
console.log(a ** b); // Math.pow(a, b);
// modulus operator
console.log(a % b);

/* Math function */
// quotient division (integer division)
console.log(Math.trunc(a/b)); // truncates the decimal part, works for negative integers as well
// extracting decimal remainder
console.log((a/b) % 1);


console.log("Comparision Operators");
console.log('3' == 3);  // true
console.log('3' === 3); // false

console.log('3' !== 3); // true
console.log('3' !== '2'); // true
console.log('3' !== '3'); // false

console.log
/* ternary operator */
let diff = a >= b ? (a - b) : (b - a);
// above code is equivalent to:
if (a >= b) {
    diff = a - b;
}
else {
    diff = b - a;
}
// reasult
console.log("diff = " + diff);

/* assignment operators,
assignment operators change the value of the actual variable itself */
console.log("Assignment Operators");
let x = 10;
console.log(x += 1);
console.log(x -= 1);
console.log(x *= 2);
console.log(x %= 2);
console.log(x);

