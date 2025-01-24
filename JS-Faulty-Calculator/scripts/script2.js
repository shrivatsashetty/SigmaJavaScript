
// global variable
let faultyMappings = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
}

function calculate() {
    let operandA = parseInt(prompt("Enter operand A"));
    let operator = prompt("Select an operation: + - * / :");
    let operandB = parseInt(prompt("Enter operand B"));
    let result;

    let flag = Math.random();
    console.log(flag);

    if( flag > 0.25 ) {
        result = eval(`${operandA} ${operator} ${operandB}`)
        alert(`${operandA} ${operator} ${operandB} = ${result}`);
    }
    else {
        let op = faultyMappings[operator];
        result = eval(`${operandA} ${op} ${operandB}`)
        alert(`${operandA} ${op} ${operandB} = ${result}`);    
    }

}

