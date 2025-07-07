/* Async Array Mapping: Write an asynchronous function that takes an array of numbers 
and returns a new array of Promises 
where each number is multiplied by 2 after a delay of 500 milliseconds. */

/* first step is to create a function that takes returns the promise using a given number */

function getPromiseSquared(num) {
    return new Promise( (resolve) => {
            setTimeout(() => {
                resolve(num * num);
            }, 1500);
        }
    );
}

/* define an array of numbers */
let arrNums = [1, 2, 3, 4, 5];

let arrPromiseSquaredNums = arrNums.map(getPromiseSquared);

console.log(arrPromiseSquaredNums);

