
function displayResult(result) {
    document.getElementById("demo").innerHTML = result;
}

let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://127.0.0.1:3000/JS-Promises/car.jpg');
    req.onload = function () {
        if (req.status == 200) {
            resolve(req.response);
        }
        else {
            reject("Error 404: File Not found");
        }
    }
    req.send();
});


promise.then(
    function (value) { 
        displayResult(value)
    }
).catch(
    function displayResult(err) {
        displayResult(err);
    }
);