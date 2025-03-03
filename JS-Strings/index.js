/* In JavaScript, Strings are immutable. 
Which means any kind of String operations returns a new string literal rather than modifying the orignal string */ 

/* a fucntion to check if the string is empty */
function isEmptyString(str) {
    return (str == null || (typeof str === "string" && str.trim().length === 0));
}

/* creating a string object using the String() constructor */
let text = new String("aBcDeFgHiJkLmNoPqRsTuVwXyZ");
console.log(text);

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
/* if the end index is not specified then by default the last index is considered */
console.log(text.slice(4)); // eFgHiJkLmNoPqRsTuVwXyZ
/* reverse slicing */
console.log(text.slice(-1)); // Z // to get the last character
console.log(text.slice(-12, -6)); // oPqRsT
/* default end index for reverse slicing is -1 */
console.log(text.slice(-12)); // oPqRsTuVwXyZ

/* we can create a String object using a String literal */
let username = "Shrivatsa";
let age = 23;
/*template string */
console.log(`User ${username} is ${age + 2} years old.`); // User Shrivatsa is 25 years old.
console.log(`My first program says, "Hello World!!!"`); // My first program says, "Hello World!!!"
/* multi-line strings using template string literal */
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
console.log(spacedText);
console.log(spacedText.length); // 9
/* method to trim(remove) all the leading & trailing whitespace character from the string */
console.log(spacedText.trim()); // "Hi"
console.log(spacedText.trim().length); // 2
console.log(spacedText.length); // 9

let myChar = "A";
console.log(myChar.padStart(4, "x"));
console.log(myChar.padEnd(4, "x"));

console.log(myChar.repeat(3));

/* get the index of a specific character or a substring withing the string */ 
console.log(text.indexOf("Z")); // 25
/* if the specified string is not found then -1 is returned */
console.log(text.indexOf("3")); // -1

let mssg = "My task is to locate, where the word 'locate' is located";
console.log(mssg.indexOf("locate")); // 14
/* the second argument specifies the index from which the search has to begin */ 
console.log(mssg.indexOf("locate", 20)); // 38
console.log(mssg.lastIndexOf("locate")); // 49
console.log(mssg.lastIndexOf("locate", 45)); // 38