

function generateRandomString(strLength) {
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let generatedString = "";

    for (let i = 0; i < strLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedString += characters.charAt(randomIndex);
    }

    return generatedString;
}

let myRandomString = generateRandomString(12);

console.log(myRandomString);
