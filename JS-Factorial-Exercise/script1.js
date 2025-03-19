function calculateFactorial(num) {
	fact = 1;
	for (let i = num; i >= 1; i--) {
		fact *= i;
	}
	return fact;
}

function main() {
	let num = parseInt(prompt("Enter a number"));
	console.log(calculateFactorial(num));
	let p1 = document.getElementById("p1");
	p1.innerHTML = `${calculateFactorial(num)}`;

    // the below query selects multiple elements
	let h2 = document.getElementsByTagName("h2");
	console.log(h2);
    /* to change the innerHTML we need to use a for loop */
	for (let i = 0; i < h2.length; i++) {
		h2[i].innerHTML = `${calculateFactorial(num)}`;
	}
}
