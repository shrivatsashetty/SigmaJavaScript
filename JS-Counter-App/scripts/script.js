/* a global variable to keep track of count */
let count = 0;

/* getting the increment, decrement & reset buttons */
const btnIncrement = document.getElementById("btn-incr");
const btnDecrement = document.getElementById("btn-decr");
const btnReset = document.getElementById("btn-reset");
const countLabel = document.getElementById("lbl-count");

btnIncrement.addEventListener(
    "click",
    () => {
        count++;
        countLabel.innerText = count;
    }
);

btnDecrement.addEventListener(
    "click",
    () => {
        if (count > 0) {
            count--;
            countLabel.innerText = count;
        }
    }
);

btnReset.addEventListener(
    "click",
    () => {
        count = 0;
        countLabel.innerText = count;
    }
);