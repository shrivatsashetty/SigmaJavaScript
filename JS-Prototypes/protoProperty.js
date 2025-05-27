const personPrototype = {
	greet() {
		console.log(`hello, my name is ${this.name}!`);
	},
};

function Person(name) {
	this.name = name;
}

// Object.assign(Person.prototype, personPrototype);
// or
Person.prototype = personPrototype;

const shri = new Person("Shrivatsa Shetty");

shri.greet();

// get the value corresponding to the prototype property of the object
console.log(shri.__proto__) // { greet: [Function: greet] }
// an alternative to get the prototype of an object
console.log(Object.getPrototypeOf(shri)) // { greet: [Function: greet] }

console.log(Object.hasOwn(shri, "greet")); // false

console.log(Object.hasOwn(shri, "name")) // true

Person.prototype.getName = function () {
	return this.name;
}

console.log(shri.getName()); // Shrivatsa Shetty



