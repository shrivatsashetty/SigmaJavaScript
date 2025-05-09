/* a simple function that logs the value passed in as argument */
function displayValue(value) {
    console.log(value);
}

/* the below function adds two numbers but makes use of the 
 callback function to log the results to the console 
 by passing the sum as the argument to the callback function */
function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
    return sum;
}

/* the below function subtracts two numbers but makes use of the
 callback function to log the results to the console
 by passing the difference as the argument to the callback function */
function subtract(subtrahend, minuend, callback) {
    let difference = subtrahend - minuend;
    callback(difference);
    return difference;
}

add(4, 5, displayValue); // 9 is logged to the console

subtract(6, 4, displayValue); // 2 is logged to the console

/* filterting arrays using callbacks */
const myNums = [-1, -2, 3, 4, -5, -6, 7, -8, -9];

/* we can resue the below function for different scenarios by passing different callback functions */
function filterNums(numArray, filterFunction) {

    const filteredNums = [];

    for (const num of numArray) {
        if (filterFunction(num)) {
            filteredNums.push(num);
        }
    }

    return filteredNums;
}

const evenNums = filterNums(myNums, x => (x%2 == 0));
console.log(evenNums); // [-2, 4, -6, -8]

const positiveNums = filterNums(myNums, x => (x > 0));
console.log(positiveNums); // [3, 4, 7]

