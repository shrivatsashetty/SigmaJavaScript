/* a simple example of a promise */
let promiseStatusCode = new Promise((resolve, reject) => {
    setTimeout(
        // 1st arg, a callback function
        () => {
        
            let randomNum = Math.random();
            
            if(randomNum < 0.5) {
                reject(404); // Status code for Error
            }
            else {
                resolve(200); // Status code for Success
            }
        },
        // 2nd arg, the timeout in miliseconds
        2000
    );
});

console.log('This script randomly returns an HTTP status code with delay of few seconds');

// promiseStatusCode.then(
//     function (successCode) {
//         console.log("Sucess with code:", successCode);
//     },
//     function (errCode) {
//         console.log("Error with code:", errCode);
//     }
// );

promiseStatusCode.then( 
    // then takes a callback function an an arg
    (errCode) => {
        console.log(errCode);
    }
).catch(
    (errCode) => {
        console.log(errCode);
    }
).finally(
    console.log("Program finished, awaiting response...")
);

