/* The Password Validator: You are building a password validation feature. 
Create a function that checks if a given password meets the following criteria: 
at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. */

let password = "#Abcdefghijk123";

/* below we create some regexp objects */
let regexpLowercase = /[a-z]/; // matches any lowercase character
let regexpUpperCase = /[A-Z]/; // matches any uppercase character
let regexpDigits = /[0-9]/; // matches any digit from 0 to 9
let regexpSpecialChars = /[-\/~!#*$@_%+=.,^&(){}[\]|;:”<>?\\\\]/; // matches any special characters
let regexpNotAlphaNum = /[^a-zA-Z0-9]+/; // matches any character which is not an alphanumeric

// console.log(regexpLowercase.test(password));
// console.log(regexpUpperCase.test(password));
// console.log(regexpDigits.test(password));
// console.log(regexpSpecialChars.test(password));
// console.log(regexpNotAlphaNum.test(password));

function isStrongPassword(password) {
    if(
        (password.length > 8) 
        && 
        regexpDigits.test(password) 
        && 
        regexpLowercase.test(password) 
        && 
        regexpDigits.test(password)
        &&
        regexpNotAlphaNum.test(password)
    ) {
        return true;
    }
    else {
        return false;
    }
}


console.log(isStrongPassword(password));
