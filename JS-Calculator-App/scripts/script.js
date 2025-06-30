/* global controls */
let displayScreen = document.getElementById("display-screen");

let btnClearScreeen = document.getElementById("btn-clear-screen");

let btnEvaluate = document.getElementById("btn-evaluate");

let btnBackspace = document.getElementById("btn-backspace");

// using advanced CSS selector to query all the symbol buttons i.e. 1, 2,...,9, +, -, *,/ 
let symbolBtns = document.querySelectorAll('.btn:not(.btn-special-ops)');

let numpad = document.getElementById("numpad");

console.log("hello")


numpad.addEventListener(
    "click",
    function(e) {
        if ([...symbolBtns].includes(e.target)) {
            displayScreen.innerText += e.target.innerText;
        }
    }
);

/* a function that clears the screen */
btnClearScreeen.addEventListener(
    "click",
    () => {
        displayScreen.innerText = "";
    }
);

/* a function to evaluate the expression */
btnEvaluate.addEventListener(
    "click",
    () => {
        try {
            displayScreen.innerText = eval(displayScreen.innerText);
        } 
        catch (err) {
            displayScreen.innerText = "ERROR"
        }
    }
);

/* implementing functionality for the backspace button */
btnBackspace.addEventListener(
    "click",
    () => {
        let screenContent = displayScreen.innerText;
        displayScreen.innerText = screenContent.slice(0, (screenContent.length - 1));
    }
);