const getRandomBool = () => Math.floor(Math.random()*2);

function getTrueOrFalse() {
    try {
        if(getRandomBool()) {
            console.log("All Good, No exceptions!!")
            return true;
        }
        else {
            throw new Error("My custom Err");
        }
    } 
    catch (err) {
        console.log("Below err occured & handled:")
        console.log("Error Mssg:\n", err.message);
        console.log("Error Name:\n", err.name);
        console.log("Error Stack:\n", err.stack);
        return false;
    }
    finally {
        console.log("Printing from finally...");
        console.log("The following value was returned:");
    }

}

let myBool = getTrueOrFalse();

console.log(myBool);


