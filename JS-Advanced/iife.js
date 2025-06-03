/* Immediately Invoked Function Expression */

async function myAsyncFunc() {
    console.log("Pausing for 2 sec...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All Good!!!");
        }, 2000);
    });  
}

/* an example of Immidiately Invoked Function Expression */
(async function main() {
    let resposeMssg = await myAsyncFunc();
    console.log(resposeMssg);













    
})();

/* 
// a way to do it without async-await using promise chaining 

(function main() {
    myAsyncFunc().then((mssg) => {
        console.log(mssg);
    });

    // // alternatively, we can also store promise object in a variable
    // const myPromise = myAsyncFunc();
    // myPromise.then((mssg) => {console.log(mssg)});

})();

*/

