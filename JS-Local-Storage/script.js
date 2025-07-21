/* setting values into the localStorage */
localStorage.setItem("firstName", "Shrivatsa");
localStorage.setItem("lastName", "Shetty");
localStorage.setItem("age", 24);  // integer values will be auto converted to string while saving
localStorage.setItem("profession", "Software Engineer");
localStorage.setItem("address", "Bengaluru");

let firstName = localStorage.getItem("firstName");
console.log(firstName); // Shrivatsa


let lastName = localStorage.getItem("lastName");
console.log(lastName); // Shetty

let age = localStorage.getItem("age");
console.log(age); // 24

/* getting name of the key in a specified index  */
console.log("First Key:", localStorage.key(0));

/* removing a specific item form local storage using it's key */
localStorage.removeItem("age");
age = localStorage.getItem("age"); // updating age variable as per updated value in local storage
console.log(age); // null


/* clearing the data in the local storage, removes all items */
// localStorage.clear();
firstName = localStorage.getItem("firstName");
lastName = localStorage.getItem("lastName");
age = localStorage.getItem("age");
console.log(firstName); // null
console.log(lastName); // null
console.log(age); // null


const user = {
    username: "Shrivatsa",
    country: "India",
    age: 24
}

localStorage.setItem("user", JSON.stringify(user));

let userStr = localStorage.getItem("user"); // will return a JSON formatted String
let userObj = JSON.parse(userStr); // converted the string to object
console.log(userStr); // {"username":"Shrivatsa","country":"India","age":24}

/* using same key overrides existing values */
localStorage.setItem("test", "test1");
localStorage.setItem("test", "test2");
localStorage.setItem("test", "test3");

/* storing arrays in local storage */
let arrNums = [1, 2, 3];

console.log(JSON.stringify(arrNums));

localStorage.setItem("myArr", JSON.stringify(arrNums));

let arrNumsMod = JSON.parse(localStorage.getItem("myArr"));
arrNumsMod.shift();
console.log(arrNumsMod);

localStorage.clear(); // clear the local storage once everything finished
