
function incrementByOne(initialValue, callback) {
    const result = initialValue + 1;
    callback(result);
} 

function incrementByTwo(initialValue, callback) {
    const result = initialValue + 2;
    callback(result);
}

function incrementByThree(initialValue, callback) {
    const result = initialValue + 3;
    callback(result);
}

function incrementBySix(initVal) {
    let res;
    incrementByOne(
        initVal,
        (initValP1) => {
            incrementByTwo(
                initValP1,
                (initValP1P2) => {
                    incrementByThree(
                        initValP1P2,
                        (initValP1P2P3) => {
                            res = initValP1P2P3
                        }
                    );
                }
            );
        }
    );
    return res;
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