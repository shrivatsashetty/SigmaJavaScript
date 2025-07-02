/* The Password Validator: You are building a password validation feature. 
Create a function that checks if a given password meets the following criteria: 
at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. */

let password = "#Abcdefghijk123";

/* below we create some regexp objects */
let patternLowercase = /[a-z]/; // matches any lowercase character
let patternUpperCase = /[A-Z]/; // matches any uppercase character
let patternDigits = /[0-9]/; // matches any digit from 0 to 9
let patternSpecialChars = /[-\/~!#*$@_%+=.,^&(){}[\]|;:”<>?\\\\]/; // matches any special characters
let patternNotAlphaNum = /[^a-zA-Z0-9]+/; // matches any character which is not an alphanumeric

console.log(patternLowercase.test(password));
console.log(patternUpperCase.test(password));
console.log(patternDigits.test(password));
console.log(patternSpecialChars.test(password));
console.log(patternNotAlphaNum.test(password));

function isStrongPassword(password) {
    if(
        (password.length > 8) 
        && 
        patternDigits.test(password) 
        && 
        patternLowercase.test(password) 
        && 
        patternDigits.test(password)
        &&
        patternNotAlphaNum.test(password)
    ) {
        return true;
    }
    else {
        return false;
    }
}


console.log(isStrongPassword(password));
