const originalArray = [1, 2, 3];
const extendedArrary = [...originalArray, 4, 5, 6];
console.log(extendedArrary); // [1, 2, 3, 4, 5, 6]

/* define a function to sum 3 numbers */
const sum = (a, b, c) => {
    let sum = a + b + c;
    return sum;
}

let total = sum(...originalArray);
console.log(total) // 6

let max = Math.max(...originalArray);
console.log(max); // 3

/* array concatenation using spread operator */
const array1 = ['apple', 'ball'];
const array2 = ['cat', 'dog'];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // ['apple', 'ball', 'cat', 'dog']

/* breaking down a string into it's substituent characters */
const username = "shetty";
let letters = [...username];
console.log(letters); // ["s", "h", "e", "t", "t", "y"]
/* combining the character array using the Array.join() mehtod */
const newUsername = letters.join("-");
console.log(newUsername); // s-h-e-t-t-y

/* to merge object */
const nums = [10, 20, 30];
console.log({...nums}); // {0: 10, 1: 20, 2: 30}
const myObj = {a: "Apple", b: "Ball"};
const myNewObj = {...nums, ...myObj,};
console.log(myNewObj); // {0: 10, 1: 20, 2: 30, a: 'Apple', b: 'Ball'}
console.log({..."test"}) // {0: 't', 1: 'e', 2: 's', 3: 't'}


/* if we merge two objects which contain one or more commong property
then the latter's will override the former's */
const obj1 = {a: "arrow", b: "ball"};
const obj2 = {b: "bat", c: "cat"};
console.log({...obj1, ...obj2}); // {a: 'arrow', b: 'bat', c: 'cat'}
console.log({...obj2, ...obj1}); // {b: 'ball', c: 'cat', a: 'arrow'}

/* conditionally adding elements to an array 
a paranthesis is use to control order of execution */
const isSummer = false;
const fruitsArray = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
console.log(fruitsArray); // ['apple', 'banana']
/* conditionally adding key:value pair to an object */
const fruitsObj = {
    apple: 10,
    banana: 5,
    ...(isSummer ? { watermelon: 30 } : {}),
};
console.log(fruitsObj); // {apple: 10, banana: 5}

