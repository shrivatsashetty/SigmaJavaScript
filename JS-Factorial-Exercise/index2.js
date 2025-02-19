function generateNumArray(len) {
    let numArr = [];
    for (len; len > 0; len--) {
        numArr.push(len);
    }
    return numArr;
}

function calcFactorialFromArray(numArr) {
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