

async function getData() {
    try {        
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            "method": "POST",
            "body": JSON.stringify({
                "username": "shrivatsa", 
                "message": "Hello World!!!"
            }),
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
    
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
    
        let jsonData = await response.json();
    
        console.log(jsonData);
    } 
    catch (err) {
        console.error(err);
    }

}

getData();