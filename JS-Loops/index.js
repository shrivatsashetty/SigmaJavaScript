/* classic for loop */
console.log("for Loop:");
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

/* classic while loop */
console.log("while loop:");
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

/* classic do while loop */
console.log("do while loop:");
j = 10;
do {
    console.log(j);
    j--;
} while(j > 0);

/* for in loop in JS */
console.log("for in loop:");
// an object
const car = {type:"Fiat", model:500, color:"white", isRetro: true};
// for in loops works on objects 
// ,by iteratig over each key of the object
for (const key in car) {
    console.log(key, ":",car[key]);
}

/* for of loop in JS */
console.log("for in loop:");
// an iterable
const myName = "Shetty";
// for of loops works on iterables, like a string, array etc
// by  iterating over each item in the iterable
for (const letter of myName) {
    console.log(letter);
}

/* forEach method */
const fruits = ["apple", "banana", "cherry"];
fruits.forEach( function(fruit, idx) {
        console.log(idx, fruit);
    }
);