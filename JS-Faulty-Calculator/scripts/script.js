function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate () {
    let operator = prompt("Select an operation: + - * / :");
    let operandA = parseInt(prompt("Enter operand A"));
    let operandB = parseInt(prompt("Enter operand B"));
    let result;

    let flag = Math.random();

    if ( operator == "+" ) {
        if (flag >= 0.25) {
            result = add(operandA, operandB);
        }
        else {
            result = subtract(operandA, operandB);
        }
    }

    if ( operator == "-" ) {
        if (flag >= 0.25) {
            result = subtract(operandA, operandB);
        }
        else {
            result  =add(operandA, operandB);
        }
    }

    if ( operator == "*" ) {
        if (flag >= 0.25) {
            result = multiply(operandA, operandB);
        }
        else {
            result = divide(operandA, operandB);
        }
    }

    if ( operator == "/" ) {
        if (flag >= 0.25) {
            result = divide(operandA, operandB);
        }
        else {
            result = multiply(operandA, operandB);
        }
    }

    // view the result of the opration in the console
    console.log(operandA, operator, operandB, "=", result);
    console.log(flag);
}