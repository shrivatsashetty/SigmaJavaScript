

function generateRandomString(strLength) {
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let randomString = "";

    for (let i = 0; i < strLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }

    return randomString;
}

let myRandomString = generateRandomString(12);

console.log(myRandomString);
