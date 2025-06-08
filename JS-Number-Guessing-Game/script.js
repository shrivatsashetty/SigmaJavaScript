

document.getElementById("btn-start-game").addEventListener(
    "click",
    main
);

function main() {

    /* specify the maximum and minimum limits */
    const min = 1;
    const max = 100;
    
    const generatedNum = Math.floor(Math.random() * (max + 1 - min) + min);
    
    console.log(generatedNum); // for developer's reference
    
    let attempts = 0;
    
    while(true) {
    
        attempts++;
    
        let choice = prompt(`Enter a number between ${min} to ${max} (inclusive)`);

        console.log(choice); // for developer's reference

        /* handling the cancel button click */
        if(choice == null) {
            break;
        }
        // handling an empty user input
        else if (choice == "") {
            alert("Please Enter a number.");
            continue;
        }

        choice = Number(choice); // typecast to Number 

        if(isNaN(choice)) {
            alert("Please enter a valid number.");
        }
        else if(choice > max || choice < min) {
            alert("Number out of range. Plz try again.");
        }
        else if(choice > generatedNum) {
            alert("You overestimated. Try again.");
        }
        else if (choice < generatedNum) {
            alert("You underestimated. Try again");
        }
        else if (choice == generatedNum ) {
            alert(`Hurray!! You got it!\nYou took ${attempts} attempts.`);
            break;
        }
    }

}

