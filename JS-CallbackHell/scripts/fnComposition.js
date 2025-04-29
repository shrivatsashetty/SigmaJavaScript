function incrementByOne(initialValue) {
    return initialValue + 1;
}

function incrementByTwo(initialValue) {
    return initialValue + 2;
}

function incrementByThree(initialValue) {
    return initialValue + 3;
}

function incrementBySix(initialValue) {
    let result = initialValue;
    result = incrementByThree(result);
    result = incrementByTwo(result);
    result = incrementByOne(result);
    return result;
}


function main() {
    let initialValue = window.prompt("Enter an Integer");
    let finalValue = incrementBySix(parseInt(initialValue, 10));
    
    let valInput = document.getElementById("val-input");
    let valOutput = document.getElementById("val-output");

    if(initialValue) {
        valInput.value = initialValue;
        valOutput.value = finalValue;
    }
}

document.getElementById("btn-op").addEventListener(
    "click",
    main
);
