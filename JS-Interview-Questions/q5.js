/* The Sum Selector: 
You are working on a function that should sum all numbers in an array until it encounters a negative number. 
Write a function that performs this summation.  */

let numArr = [1, 3, 5, 3, -1, 4, 5];

function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            return sum;
        }
        sum += array[i];
    }
    return sum;
}

console.log(sumArrayElements(numArr));
