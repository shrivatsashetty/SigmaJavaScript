function displayContent(content) {
    document.getElementById("div-cont").innerHTML = content;
}

async function getJsonData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        const responseJson = await response.json();
        displayContent(JSON.stringify(responseJson));
        console.log(JSON.stringify(responseJson));
    } catch (err) {
        console.log(err);
        displayContent(err);
        console.log(err);
    }
}

document.getElementById("btn-get-data").addEventListener(
    "click",
    getJsonData
);