/* The Vowel Counter: You need to create a function that counts the number of vowels in a given string. 
Consider both uppercase and lowercase vowels. */

let testStr = "Anonymous";

function countVowels(str) {
    const regExpVowels = /[aeiou]/i; // case insensitive regexp pattern
    let vowelCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(regExpVowels.test(str[i])) {
            vowelCount += 1;
        }
    }
    return vowelCount;
}

console.log(countVowels(testStr));
