/* Hoisting moves the function declaration 
to the top of the program */

/* calling the function before defining */

greetByName("Shrivatsa"); // Namaste Shrivatsa!!!
console.log(greetByName); // ƒ greetByName(username)

/* declaring and defining the function */
function greetByName(username) {
    console.log(`Namaste ${username}!!!`);
}

/* hoisting doesn't work for function name references */

// console.log(sum(2, 3)); // Uncaught ReferenceError: Cannot access 'sum' before initialization

const sum = (a, b) => {
    return a + b;
}

/* variables declared using var keyword are hoisted 
and initialized with undefined */

console.log(x); // undefined
var x = 7;

/* variables declared with let keyword are also hoisted
but not initialized like those declared with var keyword */

// console.log(y);// Uncaught ReferenceError: Cannot access 'y' before initialization
let y = 10;