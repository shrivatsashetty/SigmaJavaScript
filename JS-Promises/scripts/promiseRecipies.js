
/* consise way to define a functin that just returns a random number within the specified upper limit */
const getRandomNum = (upperLimit) => Math.floor(Math.random()*upperLimit);

/* the below function returns a promise object that always resolves */
function getURL() {
    return new Promise(resolve => {
        resolve(`https://jsonplaceholder.typicode.com/todos/${getRandomNum(200)}`);
    });
}

getURL()
    .then((url) => fetch(url))
    .then((res) => res.json())
    .then((jsonData) =>jsonData)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

