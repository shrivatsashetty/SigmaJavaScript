/* it's a good practice to use const keywords to declare array names */ 
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

const numsCombined = nums1.concat(nums2);
console.log(numsCombined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const primeNums = [2, 3, 5];
console.log(primeNums.concat(7, 9)); // [ 2, 3, 5, 7, 9 ]

/* accessing the first and the last elements of an array */
console.log(numsCombined[0]); // 1
console.log(numsCombined[numsCombined.length - 1]); // 10

console.log(numsCombined.toString()); // 1,2,3,4,5,6,7,8,9,10

/* push and pop methods */
let popedNum = numsCombined.pop() // removes the element in the last index and returns it
console.log(popedNum); // 10
console.log(numsCombined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let arrLenAfterPush = numsCombined.push(11); // adds the specified elemet at the last index
console.log(arrLenAfterPush); // 10
console.log(numsCombined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

/* the push functionality can also be replicated using the length property */
numsCombined[numsCombined.length] = 12;
console.log(numsCombined); // [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12 ]

/* shift and unshift methods */
let shiftedNum = numsCombined.shift();
console.log(shiftedNum); // 1
console.log(numsCombined); // [ 2, 3, 4,  5, 6, 7, 8, 9, 11 ]

let  arrLenAfterUnshift = numsCombined.unshift(0);
console.log(numsCombined); // [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 11 ]

/* identifying if an object is an array */
console.log(Array.isArray(nums1)); // true
console.log(nums1 instanceof Array); // true

/* flatten array */
const my2dArr = [ [1], [2, 3], [4, 5, 6] ];
console.log(my2dArr.flat()); // [ 1, 2, 3, 4, 5, 6 ]

/* array.flatMap() maps all the elements of an array and returns the flattened */
const flatMappedArr1 = nums1.flatMap(x => [x, x**2]);
console.log(flatMappedArr1);  

const flatMappedArr2 = my2dArr.flatMap(x => [x, 10*x]); 
console.log(flatMappedArr2); // [ [ 1 ], 10, [ 2, 3 ], NaN, [ 4, 5, 6 ], NaN ]

// arrays can be initialized using the Array constructor
const names = new Array("Shri", "Vatsa", "Shetty");
console.log(names); // [ 'Shri', 'Vatsa', 'Shetty' ]

console.log(names.at(1)); // Vatsa
/* array.at() allows negtive array indexing */
console.log(names.at(-1)); // Shetty

/* join array elements using a seperator, default seperator is a comma(',') */
console.log(names.join(" * "));

/* the delete keyword, 
the delete keyword deletes the specified element & leaves empty holes in an array */
delete names[1];
console.log(names); // [ 'Shri', <1 empty item>, 'Shetty' ]

/* copyWihin method */
names.copyWithin(1, 0, 1);
console.log(names); // [ 'Shri', 'Shri', 'Shetty' ]

/* splice method, adds element(s) at the specified index in the array by removing elements if necessary */
const itemsRemovedOnSplice = names.splice(1, 2, "Vatsa", "Kumar");
console.log(itemsRemovedOnSplice); // [ 'Shri', 'Shetty' ]
console.log(names); // [ 'Shri', 'Vatsa', 'Kumar' ]

/* array slicing */
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrusFruits = fruits.slice(1,3);
console.log(citrusFruits); // [ 'Orange', 'Lemon' ]

/* array searching methods */
const colorList = ["Red", "Yellow", "Red", "Green", "Green", "Yellow"];
/* index of first occurance of an element */
console.log(colorList.indexOf("Red")); // 0
console.log(colorList.indexOf("NoColor")); // -1 (which means not found)

/* index of last occurance of an element */
console.log(colorList.lastIndexOf("Yellow")); // 5

/* check if an element exists in an array */
console.log(fruits.includes("Apple")) // true

/* find the first element in the array that passes the given test function */
const pickOddNums = (value, index, array) => (value % 2) != 0;
console.log(nums2.find(pickOddNums)); // 7
console.log(nums2.findLast(pickOddNums)); // 9
console.log(nums2.findIndex(pickOddNums)); // 1

