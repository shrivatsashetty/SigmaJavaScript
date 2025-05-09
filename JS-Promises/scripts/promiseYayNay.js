/* a more consice way to write simple promises
instead words resolve & reject we can use any name */
let promiseYayNay = new Promise((yay, nay) => {

    let flag = Math.floor(Math.random()*2); // the value of variable "flag" will be either 0 or 1

    flag ? yay("Sucess") : nay("Failure");
});

console.log('This script randomly returns a Text Message:');

promiseYayNay.then( mssg => {
    console.log(mssg);
}).catch(mssg => {
    console.log(mssg);
});