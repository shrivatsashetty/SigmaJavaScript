let animal = {
  lives: true
}

let cat = {
  runs: true,
  wild: false
}

let tiger = {
  wild: true
}

console.log(tiger.wild); // true

console.log(tiger.runs); // undefined

console.log(tiger.lives); // undefined

/* now, tiger object will inherit missing properties from cat object */
tiger.__proto__ = cat;

/* now, cat object will inherit missing properties from animal object */
cat.__proto__ = animal;

console.log(tiger.runs); // true

console.log(tiger.lives) // true
