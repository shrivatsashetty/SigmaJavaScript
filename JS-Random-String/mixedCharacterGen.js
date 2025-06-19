/* The Fisher Yates shuffling Algorithm to randomly shuffle the elements of an array */ 
function fisherYatesShuffle(array) {
    for (let i = (array.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // i+1 specifies the upper limit for the random number
        [array[i], array[j]] = [array[j], array[i]]; // in-place swaping of array elements
    }
    return array;
}

function createRandomSubString(mainString, lenSubString) {
    let subStr = "";
    for(let i = 0; i < lenSubString; i++) {
        let randomIndex = Math.floor(Math.random() * mainString.length);
        subStr += mainString.charAt(randomIndex);
    }

    return subStr;
}

function createRandomPassword() {
    const charLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charDigits = "0123456789";
    const charSymbols = "!@#$%^&*()";

    let password = "";

    password += createRandomSubString(charUpperCase, 3);
    password += createRandomSubString(charLowerCase, 3);
    password += createRandomSubString(charDigits, 3);
    password += createRandomSubString(charSymbols, 3);

    password = fisherYatesShuffle(password);

    return password;
}

console.log(createRandomPassword());
