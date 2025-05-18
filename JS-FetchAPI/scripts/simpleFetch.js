
async function getData() {

    try {        
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/201");

        if(!response.ok) {
            throw new Error(`${response.status}`);
        }

        let jsonData = await response.json();

        console.log(jsonData);
        
    } 
    catch (err) {
        console.error(err);
    }
}

getData();

/*

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
        if(!res.ok){
            throw new Error("Error:", res.status);
        }
        return res.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log(err);
    });


*/

