/* Hoisting moves the function declaration 
to the top of the program */

greetByName("Shrivatsa"); // Namaste Shrivatsa!!!
console.log(greetByName); // ƒ greetByName(username)

function greetByName(username) {
    console.log(`Namaste ${username}!!!`);
}

/* hoisting doesn't work for function name references */

// console.log(sum(2, 3)); // Uncaught ReferenceError: Cannot access 'sum' before initialization

const sum = (a, b) => {
    return a + b;
}

/* hoisting also works for variables 
but only for those declared with "var" keyword */

console.log(x); // undefined
var x = 7;

/* hoisting doesn't work for let keyword */

// console.log(y);// Uncaught ReferenceError: Cannot access 'y' before initialization
let y = 10;