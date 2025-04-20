
/* this first function will get executed later after other synchronous functions finish runnnig */ 
window.setTimeout(
    () => {
        console.log("Inside Settimeout");
    },
    3000
);

console.log("Hello World!!!");



