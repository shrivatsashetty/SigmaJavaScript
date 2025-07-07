/* The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. 
    Write an async function named brewCoffee that takes the type of coffee and returns a promise. 
    The promise should resolve with a message indicating that the coffee is ready after a random delay. */

/* a function to return a random number within an upper limit */
const getRandomNum = (upperLimit) => Math.floor(Math.random()*upperLimit);

/* simulating an enum using JavaScript object */
const coffeMenu = {
    CAPPUCCINO: "Cappuccino",
    MOCHA: "Mocha",
    AMERICANO: "Americano",
    LATTE: "Latte",
    BLACK: "Black",
    ESPERESSO: "Experesso"
}

function brewCoffe(coffeType) {
    let randomDelay = getRandomNum(5);
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve(`Your order for ${coffeType} is ready to sip!!!`);
            }, randomDelay*1000)
        }
    );
}

async function orderCoffe() {
    console.log("Brewing Coffe, Please Wait...");
    try {
        let brewedCoffe = await brewCoffe(coffeMenu.AMERICANO);
        console.log(brewedCoffe);
    } 
    catch (err) {
        console.error(err);       
    }    
}

orderCoffe();