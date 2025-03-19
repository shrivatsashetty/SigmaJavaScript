/* an array can store a heterogeneous list of items in it  */
let functionSayHello = username => "Hello " + username ; // we can store this fuction in an array
const items = [ "Hello", 21, true, 3.14, [1, 2, 3], {name: "Shri", age: 24}, functionSayHello];
console.log(items.length); // 6
console.log(typeof items); // object

/* declaring an empty array and assigning seperately */
let names = [];
names[0] = "Shri";
names[1] = "Hari";
// names[2] = "Krishna"; // skipping the assignment in one of the index in between will cause empty element
names[3] = "Omkar";
console.log(names); // [ 'Shri', 'Hari', <1 empty item>, 'Omkar' ]

/* initializing an array with const keyword prevents it from getting reassigned a new value
    however array mutation is still possible */
const evenNums = [2, 4, 6, 8];
evenNums[0] = 0; // array mutation
// evenNums = [3, 5, 7]; // TypeError: Assignment to constant variable.
console.log(evenNums.toString()); // 0,4,6,8

/* ways to iterate over the elements of an array using a classic for loop */ 
for (let i = 0; i < evenNums.length; i++) {
    const element = evenNums[i];
    console.log(element);
}

// iterating over the items of an array using a array.forEach() method
evenNums.forEach((element, index, array) => {
    console.log(`element ${element} occours at index ${index} of array: ${array}`);
});

/* iterating over the properties of an object using for in loop */ 
obj = {
    'a': "A",
    'b': "B",
    'c': "C",
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key} -> ${element}`);
    }
}

/* iterating over the elements of an array using for of loop */
for (const element of evenNums) {
    console.log(element);
}
// 0 4 6 8

/* map */ 
let naturalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareNums = naturalNums.map( naturalNum => naturalNum ** 2);
console.log(squareNums); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// we can also iterate over the indexes of the array or the entire array itself using map function
let indexes = naturalNums.map( (naturalNum, index, array) => index );
console.log(indexes.length); // 10

/* filter fuction */
// assigning a lamda function to a variable, it's a good practice to declare the function names as constants
const pickOddNums =  function (num) {
    if( (num % 2) != 0) {
        return num;
    }
}

let oddNaturalNums = naturalNums.filter(pickOddNums);
console.log(oddNaturalNums); // [ 1, 3, 5, 7, 9 ]

// a function to pick only even numbers
const pickEvenNums = num => {
    if(num % 2 == 0) {
        return num;
    }
}

console.log(typeof pickEvenNums); // function

let evenNaturalNums = naturalNums.filter(pickEvenNums);
console.log(evenNaturalNums); // [ 2, 4, 6, 8, 10 ]

/* reduce function */
// a function to sum two numbers
let summation = naturalNums.reduce( (total, value) => total + value);
console.log(summation); // 55

/* create an array from other iterable objects */
console.log( Array.from("Shrivatsa") );

/* we can also use it to return an array from any object with a length property */ 
let arrayLike = {
    0:1,
    1:2,
    2:3,
    length:3 // this key-value pair of the ArrayLike object specifies the total no of key-value pairs in the object excluding itself
};

let newArray = Array.from(
    arrayLike,
    (value, index) => value, // this is the default function will be called on every item (key-value pair) in the ArrayLike object
);

console.log(newArray); // [ 1, 2, 3 ]


/* iterating over each item of the array */ 
let arrayIndices = Array(5).keys(); // returns an iterator object consisting of the indices of the empty array element
console.log(arrayIndices); // Object [Array Iterator] {}
arrayIndices.forEach(index => console.log(index)); // 0 1 2 3 4

/* creating an array of number range using Array.forEach() */ 
let rangeNums = Array.from(
    Array(5).keys(),
    key => key + 1
);
console.log(rangeNums); // [ 1, 2, 3, 4, 5 ]