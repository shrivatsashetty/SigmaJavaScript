/* an arrow function that returns either 0 or 1 */
const getRandomBool = () => Math.floor(Math.random()*2);

function successCallback(result) {
    console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
    console.error(`Error generating audio file: ${error}`);
}

function getPromise() {
    console.log("Processing...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (getRandomBool()) {
                resolve("https://example.com/");
            } 
            else {
                reject("404 Not found!");
            }
        }, 1500);
    });
}

// const promise1 = getPromise();
// const promise2 = promise1.then(successCallback, failureCallback);

getPromise()
    .then((url) => {
        return fetch(url); // example.com is the url that will be returned
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });