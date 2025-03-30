let firstBox = document.querySelector("#b1");

/* the difference between the log and the dir command */ 
console.log(firstBox); // prints the string representation of the object
console.dir(firstBox); // prints the list of property-value pairs
/* is more noticable in firefox browser console  */ 


let container = document.querySelector(".container");
console.log("Printing the Inner HTML Contents:\n", container.innerHTML); // prints the escape sequences along with text
console.log("Printing the Outer HTML Contents:\n", container.outerHTML); // prints the content inside along with the element itself
console.log("Printing the Inner Text :\n", container.innerText); // prints only the text content inside an element, excluding any HTML tags, doesn't respect text formatting
console.log("Printing the Text Content:\n", container.textContent); // similar to innerText but respects formatting

/* changing the inner HTML content of an element */
let b2 = document.getElementById("b2");
/* changing the innerHTML will override existing HTML content also, not just text */ 
b2.innerHTML = "I'm the content inside the second box!!";

console.log("Tag Name of the first Box element:", firstBox.tagName);

let hiddenPara = document.querySelector(".para-hdn");

if (hiddenPara.hidden) {
    hiddenPara.hidden = false;
} else {
    hiddenPara.hidden = true;
}


/* getting the attributes of an HTML element */ 
console.log(firstBox.hasAttribute("style")); // true
console.log(firstBox.getAttribute("style")); // color: red;
console.log(firstBox.getAttribute("id")); // b1

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
box3.id = "b3";
box3.setAttribute("style", "color: blue;");
/* setting multiple attribute at once */ 
Object.assign(box3, {
    "className": "box", // to set class we have to use the key "className" since "class" is a reserved keyword in Js 
    "data-text": "qwerty",
});

box3.innerHTML = "I have been <b> dynamically added </b>"; // the html formatted text is parsed as html, <b> tags in this case
/* dynamically adding the */ 
container.append(box3); // adds a new element at the last within the specified element.

let dataPara0 = document.createElement("p");
dataPara0.innerHTML = "Data Para 0";
dataPara0.dataset.message = "Welcome";
/* dynamically adding an element before a selected element */
let dataPara1 = document.querySelector("[data-message='Hi']");
dataPara1.before(dataPara0);

let para7 = document.createElement("p");
para7.innerHTML = "I'm added <i>Before</i> Element's <b>Opening</b>  Tag";
para8  = document.createElement("p");
para8.innerHTML  = "I'm added <i>Before</i> Element's <b>Closing</b> Tag";

box3.insertAdjacentElement("beforebegin", para7);
box3.insertAdjacentElement("beforeEnd", para8);

/* removing an element from the DOM */
let dataPara4 = document.querySelector('[data-message="Bye"]');
dataPara4.remove();


/* getting the classes associated with an element */
console.log("Class List:", container.classList);
console.log("Class Name:", container.className);

/* adding and removing classes */ 
container.classList.add("bg-lavender");
container.classList.remove("bg-azure");
console.log("Class List After Mod:", container.classList);
/* element.classList.add("className") is idempotent
which means adding a same class multiple times will still 
result in the class getting added only once */

/* the toggle method removes the class if already present & vice-versa,
copy the below line in the console tab of the chrome dev-tools 
and run it again and again to see the effect of toggle */
container.classList.toggle("bg-lavender");

// const list = document.getElementById("items");

// const listItem1 = document.createElement("li");
// const listItemText1 = document.createTextNode("Banana");
// listItem1.appendChild(listItemText1);

// const listItem2 = document.createElement("li") ;
// listItem2

// list.append(listItem1);

const myList =  document.createElement("ul");

const listItem1 = document.createElement("li");
listItem1.appendChild(document.createTextNode("Banana"));
myList.appendChild(listItem1);

document.body.appendChild(myList);

/* insert within a node wrt a child node */
const listItem2 =  document.createElement("li");
listItem2.appendChild(document.createTextNode("Apple"));
myList.insertBefore(listItem2, listItem1);


const listItem3 = document.createElement("li");
listItem3.appendChild( document.createTextNode("Cherry") );
myList.insertAdjacentElement("beforeend", listItem3);
// insert an HTML formatted string
myList.insertAdjacentHTML("afterbegin", "<li> Avacado </li>");

const listItem4 = document.createElement("li");
/* insert a text node within an element just after it's opening tag */
listItem4.insertAdjacentText("afterbegin", "Dragon Fruit");
/* insert a text node within an element just before it's closing tag */
const listItem5 = document.createElement("li");
listItem5.insertAdjacentText("beforeend", "Orange");
/* The node.append() method allows to append multiple element at once */ 
myList.append(listItem4, listItem5);

/* prepend adds at the beginning of the parent node */ 
const listItem0 = document.createElement("li");
listItem0.insertAdjacentText("afterbegin", "Apricot");
myList.prepend(listItem0);

const listItem6= document.createElement("li");
listItem6.insertAdjacentText("afterbegin", "Jackfruit");
listItem5.before(listItem6);

const listItem7 = document.createElement("li");
listItem7.insertAdjacentText("afterbegin", "Lemon");
listItem6.before(listItem7);

const listItem8 = document.createElement("li");
listItem8.innerText = "Pineapple";
listItem3.replaceWith(listItem8);

const listItem9 = document.createElement("li");
listItem9.innerText = "Mango";

// replace an existing child node with a different node
myList.replaceChild(listItem9, listItem2);


