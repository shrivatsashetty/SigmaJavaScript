/* example code snippet to better understand the reduce function,
suggested to run the following file in debug mode */

let naturalNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function factorial (total, value, index, array) {
    return value * total;
}

/* alculating factorial of a number without using recursion,
but reduce cannot replace recursion in all case */
let fact = naturalNums.reduce(factorial);
console.log(fact); // 3628800

/* a fuction to perform custom operation */
function double (total, value, index, array) {
    return total + (value * 2) ;
}

let res = naturalNums.reduce( double);
console.log(res); // 109

