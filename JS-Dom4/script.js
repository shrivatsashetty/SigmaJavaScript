let firstBox = document.querySelector("#b1");

/* the difference between the log and the dir command */ 
console.log(firstBox); // prints the string representation of the object
console.dir(firstBox); // prints the list of property-value pairs
/* is more noticable in firefox browser console  */ 


let container = document.querySelector(".container");
console.log("Printing the Inner HTML Contents:\n", container.innerHTML); // prints the escape sequences along with text
console.log("Printing the Outer HTML Contents:\n", container.outerHTML); // prints the content inside along with the element itself
console.log("Printing the Inner Text :\n", container.innerText); // prints only the text content inside an element
console.log("Printing the Text Content:\n", container.textContent);


console.log("Tag Name of the first Box element:", firstBox.tagName);

let hiddenPara = document.querySelector(".para-hdn");

if (hiddenPara.hidden) {
    hiddenPara.hidden = false;
} else {
    hiddenPara.hidden = true;
}

/* changing the inner HTML content of an element */
let b2 = document.getElementById("b2"); 
/* changing the innerHTML will override existing HTML content also, not just text */ 
b2.innerHTML = "I'm the content inside the second box!!";


/* getting the attributes of an HTML element */ 
console.log(firstBox.hasAttribute("style")); // true
console.log(firstBox.getAttribute("style")); // color: red;

/* setting an attribute, takes two args, the attribute & the value */ 
firstBox.setAttribute("style", "color: hotpink");
/* unhiding a box by removing the hidden attribute */ 
firstBox.removeAttribute("hidden");


/* enables live editing the page content */
document.designMode = "on";


/* working with data-* attributes */ 
console.log(b2.dataset);

/* reading the data-* attributes */
console.log("Element added by", b2.dataset.author);
console.log("Creation Date:", b2.dataset.creationDate); // attribute names in slug-case get converted to camelCase
/* setting the data attributes */ 
b2.dataset.author = "Shetty";
b2.dataset.creationDate = "2025 April";
console.log(b2.dataset);

/* selects all the elements containing the data-score attribute */ 
const scoreParas = document.querySelectorAll("[data-score]");
console.log(scoreParas);
/* selects elements whose value corresponding to the data-score attribute is "3" */ 
const tripleScoreParas = document.querySelectorAll('[data-score="3"]');
console.log(tripleScoreParas);
/* iterating over the selected results */
console.log("Here are the messages contained in the Para Elements with score 3:");

tripleScoreParas.forEach(paraElement => {
    console.log(paraElement.dataset.message);
});


/* generating a new element using javascript */ 
let box3 = document.createElement("div");
box3.setAttribute("id", "b3");
/* setting multiple attribute at once */ 
Object.assign(box3, {
    "className": "box", // to set class we have to use the key "className" since "class" is a reserved keyword in Js 
    "data-text": "qwerty",
    "style": "color: blue;"
});

box3.innerHTML = "I have been <b> dynamically added </b>"; // the html formatted text is parsed as html, <b> tags in this case
/* dynamically adding the */ 
container.append(box3);














