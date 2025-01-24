
/* a fucntion to check if the string is empty */
function isEmptyString(str) {
    return (str == null || (typeof str === "string" && str.trim().length === 0));
}

/* english alphabets in alternating case */
let text = "aBcDeFgHiJkLmNoPqRsTuVwXyZ";

/* length attribute */
console.log(text.length); // 26

/* string indexing */
console.log(text[0]); // a
console.log(text[6]); // g
console.log(text[100]); // undefined

console.log(text.charAt(0)); // a
console.log(text.charAt(6)); // g
/* char at out of bound index */
let charAt100 = text.charAt(100); // returns an empty string
console.log(isEmptyString(charAt100)); // true

/* string methods */
console.log(text.toUpperCase()); // HELLO WORLD!!!
console.log(text.toLowerCase()); // hello world!!!
console.log(text.slice(1,8));  // BcDeFgH
console.log(text.slice(4)); // eFgHiJkLmNoPqRsTuVwXyZ
console.log(text.slice(-12)); // oPqRsTuVwXyZ
console.log(text.slice(-1)); // Z // to get the last character
console.log(text.slice(-12, -6)); // oPqRsT

let username = "Shrivatsa";
let age = 23;
/*template string */
console.log(`User ${username} is ${age + 2} years old.`); // User Shrivatsa is 25 years old.
console.log(`My first program says, "Hello World!!!"`); // My first program says, "Hello World!!!"
/* multiline strings using template strings */
console.log(
    `A quick
    brown fox jumps
    over the lazy dog`
)



let strSaas = "SaaS";
console.log(strSaas); // SaaS
/* replace first occurance of the specified string */
console.log(strSaas.replace("S", "P")); // PaaS
/* replace all the occurance of the matching string */
console.log(strSaas.replaceAll("S", "D")); // DaaD
/* replacing the entire word */
let strHelloWorld = "Hello World!!!";
console.log(strHelloWorld.replace("Hello", "Namaste")); // Namaste World!!!
console.log(strHelloWorld.includes("World")); // true

console.log("Andaman".concat("-", "Nicobar", " ", "Islands")); // Andaman-Nicobar Islands

/* escape characters */
console.log("Someone said: \"Tomorrow never comes\" "); // Someone said: "Tomorrow never comes"

let spacedText = "    Hi   ";
console.log(spacedText.trim()); // Hi
console.log(spacedText.trim().length); // 2

let myChar = "A";
console.log(myChar.padStart(4, "x"));
console.log(myChar.padEnd(4, "x"));

console.log(myChar.repeat(3));

console.log(text.indexOf("Z")); // 25
console.log(text.indexOf("3")); // -1

let mssg = "My task is to locate, where the word 'locate' is located";
console.log(mssg.indexOf("locate")); // 14
console.log(mssg.indexOf("locate", 20)); // 38
console.log(mssg.lastIndexOf("locate")); // 49
console.log(mssg.lastIndexOf("locate", 45)); // 38