/* Array Destructuring */
let [str1, str2, str3] = ["Hello", "World"];
console.log(str1); // Hello
console.log(str2); // World
console.log(str3); // undefined

/* using rest operator and skipping an element */
let [num1, , num3, ...remainingNums] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num1); // 1
console.log(num3); // 3
console.log(remainingNums); // [4, 5, 6, 7, 8, 9, 10]

// destructuting for strings
let words = "My name is Shrivatsa Shetty".split(" ");
console.log(words); // ['My', 'name', 'is', 'Shrivatsa', 'Shetty']
let [firstWord, secondWord, , ...fullName] = words;
console.log(firstWord); // My
console.log(secondWord); // Name
console.log(fullName); // Shrivatsa Shetty

/* declaring default fallback values */
let [p = 1, q = 2, r = 3] = [10, 20];
console.log(p); // 10
console.log(q); // 20
console.log(r); // 3

/* destructuting assignment using array index */
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[1]:fruit1 ,[0]:fruit2} = fruits;
console.log(fruit1); // Oranges
console.log(fruit2); // Bananas

/* swapping variables in place*/
let m = 10, n = 20;
console.log(m); // 10
console.log(n); // 20
/*after swapping*/
[m, n] = [n, m];
console.log(m); // 20
console.log(n); // 10


/* --------------------------------------------------------------------- */

/* Object Destructuring */
/* the variable names must match the object's property names */
const {a, b} = {a: "apple", b: "ball"};
console.log(a); // apple
console.log(b); // ball

/* providing custom name binding */
const { userName: personName, age: personAge } = { userName: 'John', age: 30 };
console.log(personName); // Output: John
console.log(personAge); // Output: 30

/* creating an object from the variables */
console.log({personName, personAge}); // {personName: "John", personAge: 30}
/* creating an array from the variables */
console.log([personName, personAge]); // ["John", 30]

/* fallback values for object destucturing */
const country = {countryName: "India", capitalState: "New Delhi"};
let {countryName, capitalState, nativeName = "Bharath"} = country;
console.log(countryName); // India
console.log(capitalState); // New Delhi
console.log(nativeName); // Bharath


/* creating objects from variables
the variable name becomes object property
and tha value stored inside the variable becomes
the properties correspondig value */
let c = "cat";
let d = "dog";
console.log({c, d}); // {c: "cat", d: "dog"}
console.log([c, d]); // ["cat", "dog"]

