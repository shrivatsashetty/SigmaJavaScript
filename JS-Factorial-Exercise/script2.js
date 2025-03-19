/* a user defined function to generate an array of given length */ 
function generateNumArray(len) {
    return Array.from(Array(len).keys(), key => (key + 1) );
}

/* a function to calculate factorial from an array of numbers using Array.reduce() method */ 
function calcFactorialFromArray(numArr) {
    console.log(numArr); // to check if the array passed in is right
    let factorial = numArr.reduce( (total, currentValue) => total * currentValue, 1);
    return factorial;
}

function main() {
	let num = parseInt(prompt("Enter a number"));
	let p1 = document.getElementById("p1");
    let numArr = generateNumArray(num);
    let factorial = calcFactorialFromArray(numArr);
    p1.innerHTML = factorial;
    console.log(factorial);
}