
// global variable
let faultyMappings = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
}

function calculate() {
    // take the arithmetic expression which you want to evaluate as input
    let operation = prompt("Enter below the expression to evaluate:");
    let result;

    let flag = Math.random();
    console.log(flag);

    if( flag > 0.25 ) {
        result = eval(operation);
        window.alert(`${operation} = ${result}`);
    }
    else {
        // extract the operator
        let operator = operation.match(/[+\-*/]/)[0];
        // check the faulty operation corresponding to the operation
        let faultyOp = faultyMappings[operator];
        // replace the operator with the faulty one in the expression
        result = eval(operation.replace(operator, faultyOp));
        window.alert(`${operation} = ${result}`);
    }
}

