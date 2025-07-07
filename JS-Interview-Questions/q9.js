/* The Asynchronous Shopper:
   Imagine you are building an online shopping application. 
   Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. 
   The promise should resolve with an order confirmation message after a random delay. 
*/

/* a function to return a random number within an upper limit */
const getRandomNum = (upperLimit) => Math.floor(Math.random()*upperLimit);

/* a function that always returns a resolved promise */
function confirmOrder() {
    let randomDelay = getRandomNum(5)
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve("Order Placed!!")
            }, randomDelay*1000);
        }
    );
}

/* an asynchronous function to place order */
async function placeOrder() {
    console.log("Placing Order, Please wait...");
    let confirmation = await confirmOrder();
    console.log(confirmation);
}

placeOrder();