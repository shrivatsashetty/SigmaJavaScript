// open console tab of dev tools in your browser to view the messages
console.log("Hello World!!!");
console.log("Javscript executed from external file...");

// ask a user input in the browser
var a = prompt('Enter a number');
// verify before submit
var isTrue = confirm("Are you sure ?");
if(isTrue) {
    console.log("You entered " + a);
}
else {
    console.log("Operation cancelled");
}

// changes the page title
document.title = "Introduction to JavaScript";
// changes the background color
document.body.style.backgroundColor = "gray";