/* the document object is only defined inside a browser environment,
hence view the output in the console tab of dev-tools */

console.log("Hello DOM!!!");

/* check if the element has children nodes within it */
console.log(document.body.hasChildNodes()); // true

let childrenElements = document.body.children;

console.log(typeof childrenElements) // object

console.log(`Total children elments: ${childrenElements.length}`); //2
/* the items of in HTMLcollection can be iterated using the for..of loop */
for (const node of childrenElements) {
    console.log(node);
}

let childNodeElements = document.body.childNodes;

console.log(`Total child nodes: ${childNodeElements.length}`);

console.log(typeof childNodeElements) // object

for(let i = 0; i < childNodeElements.length; i++) {
    console.log(`At index ${i} we have`);
    console.log(childNodeElements[i]);
}

/* store the container element in an object */
let container = document.body.children[0];

console.log(`container: ${container}`);

/* for storing all the elements inside the child nodes */
let containerChildNodes = container.childNodes;

console.log(`Total child nodes inside the container: ${containerChildNodes.length}`);

console.log(typeof containerChildNodes) // object

for(let i = 0; i < containerChildNodes.length; i++) {
    console.log(`At index ${i} we have`);
    console.log(containerChildNodes[i]);
}

console.log(`The first child of the container element is: ${container.firstChild}`);
console.log(`The last child of the container element is: ${container.lastChild}`);
console.log(`The first element child of the container element is: ${container.firstElementChild}`);
console.log(`The last element child of the container element is: ${container.lastElementChild}`);

/* manipulating CSS using DOM */
container.firstElementChild.style.backgroundColor = "yellow";
container.firstElementChild.style.borderRadius = "10px";
container.lastElementChild.style.border = "2px dashed red";

/* get the parent element of a particular element */

console.log("The parent element of the container element is\n",container.parentElement);
console.log("The parent node of the container element is\n",container.parentNode);

let box3 = container.children[2];
console.log(`The selected element is ${box3}`);
/* getting the sibling nodes */
console.log(box3.nextSibling) // #text
console.log(box3.nextElementSibling) // <div class="box">Box4</div>
console.log(box3.previousSibling) // #text
console.log(box3.previousElementSibling) // <div class="box">Box2</div>

