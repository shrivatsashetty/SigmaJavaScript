/* an arrow function that returns either 0 or 1 */
const getRandomBool = () => Math.floor(Math.random()*2);

/* a function to return a random number within an upper limit */
const getRandomNum = (upperLimit) => Math.floor(Math.random()*upperLimit);

function getApiEndPoint() {
    /* to give a loading effect */
    console.log("Getting Endpoint...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (getRandomBool()) {
                resolve(`https://jsonplaceholder.typicode.com/todos/${getRandomNum(200)}`);
            } 
            else {
                reject("Error 404: Not found!");
            }
        }, 1500);
    });
}

/* 

getApiEndPoint()
    .then((endpointURL) => fetch(endpointURL))
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

*/


// below is one more way to write the above commeted code using async await which makes it resemble syncronours code
async function getUserData() {

    try {
        const url = await getApiEndPoint();
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    }
    catch (err) {
        console.log("Error fetching data:", err);
        throw err;        
    }
} 
  
getUserData();