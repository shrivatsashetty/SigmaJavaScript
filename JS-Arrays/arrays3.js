/* by default the sort method sorts the array alphabetically,
sorting is an inplace operation */
const words = ["Cat", "Apple","Ball"]
words.sort();
console.log(words); // [ 'Apple', 'Ball', 'Cat' ]
console.log(words.reverse()); // [ 'Cat', 'Ball', 'Apple' ]

const jumbledNums1 = [3, 10, 4, 1, 100];
jumbledNums1.sort();
console.log(jumbledNums1); // [ 1, 10, 100, 3, 4 ]

/* the toSorted method sorts and returns a new array, 
it doesn't modify the orignal array */
const randomNums = [20, 100, 30, 5, 10];
/* for performing a numerical sort we'll need to provide a compare function and later pass it to the sort function */ 
const sortNumsAscending = (a, b) => a - b;
const sortedNumsAsc = randomNums.toSorted(sortNumsAscending);
console.log(sortedNumsAsc); // [ 5, 10, 20, 30, 100 ]
/* sorting numbers in random order */
let sortedNumsRandom = randomNums.toSorted( () => 0.5 - Math.random() );
console.log(sortedNumsRandom);

/* finding the smallest element in the array */
let min = randomNums.toSorted(sortNumsAscending)[0];
console.log(min); // 5
/* ways to find the largest element in the array */
let max = randomNums.toSorted(sortNumsAscending).reverse()[0];
console.log(max); // 100
max = randomNums.toSorted(sortNumsAscending).at(-1);
console.log(max); // 100

/* after all the operation just check wether the randomNums are in correct order */
console.log(randomNums);