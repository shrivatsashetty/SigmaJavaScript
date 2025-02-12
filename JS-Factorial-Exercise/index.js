
function calculateFactorial(num) {
    fact = 1;
    for (let i = num; i >= 1; i-- ) {
        fact *= i;
    }
    return fact;
}

function main() {
    let num = parseInt(prompt("Enter a number")) ;
    console.log(calculateFactorial(num)) ;
    document.getElementsByTagName("h2").innerHTML = `${calculateFactorial(num)}`;

}