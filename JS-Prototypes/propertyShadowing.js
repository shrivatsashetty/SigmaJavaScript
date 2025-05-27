const personPrototype = {

    country: "USA",

    hobbies: ["Code", "Listen to Music"],

    // using a shorter syntax for function
    greet() {
        console.log("Hello!");
    },

    introduce() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old`);
    },

    getBio() {
        console.log(`I live in ${this.country} and like to ${this.hobbies} when I'm free`);
    },
    
};

/* a method to create a new object of a prototype */
const sundar = Object.create(personPrototype);

/* defining own properties for an object */
sundar.firstName = "Sundar";
sundar.lastName = "Pichai";
sundar.age = 45;
/* if property already exist in prototype, it gets shadowed */
sundar.country = "India"
sundar.hobbies = ["Solve Problems", "Play Cricket", "Run Marathon"];

/* usually we let methods to be inherited from prototype */
sundar.greet(); // Hello!

sundar.introduce(); // My name is Sundar Pichai and I'm 45 years old

sundar.getBio(); // I live in India and like to Solve Problems,Play Cricket,Run Marathon when I'm free

