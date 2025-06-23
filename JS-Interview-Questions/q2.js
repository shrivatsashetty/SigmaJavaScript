/* The Double Trouble: You are tasked with writing a function that doubles each element in an array. 
However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. */

let arr = [7, 6, 6, 9, 2, 1, 1, 0, 5];

let doubles = [];

arr.forEach(function (currentElement, index, array) {
    if(array[index +1] != array[index]) {
        doubles.push(currentElement * 2);
    } 
    else {
        doubles.push(currentElement);
    } 
})

console.log("Orignal Array:", arr); //  [ 7, 6, 6, 9, 2, 1, 1, 0, 5 ]
console.log("Doubled Array:", doubles); // []

