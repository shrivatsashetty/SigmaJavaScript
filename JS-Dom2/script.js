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

/* manipulating an HTML table using DOM */
let tbl = document.body.children[1];

/* changing caption */
tbl.caption.innerHTML = "Hello World!!!";

/* log the entire table element */
console.log("Here's the table:\n",tbl);
/* storing the table sections in an array */
let tblSections = Array.from(tbl.children);

console.log("A table contains the following sections:");

for (let i=0; i<tblSections.length;i++) {
    console.log(tblSections[i]);
}

console.log("Table Sections in an Array:", tblSections);

/* get only the table header */
console.log("Here's the table header:\n", tbl.tHead);
/* get the count of heading columns */
console.log("Total no of heading columns:\n", tbl.tHead.children[0].children.length);

/* getting all the rows in the table */
let tblRows = tbl.rows;
console.log("Here is the list of all the rows in the table");

/* iterating over each row using a for of loop */
for (const row  of tblRows) {
    console.log(row);
}

console.log("Here's the Table's Footer:\n", tbl.tFoot);

/* getting the data rows .i.e. the rows within tbody
accessing the table's cells */
let dataRows = tbl.tBodies[0].children;

console.log(`Total ${dataRows.length} Data Rows in the table`);

/*or of loop is used to iterate over iterable objects,
like an array, list or a collection of objects */
for (const row of dataRows) {
    // let currentRowIndex = row.sectionRowIndex;
    // let currentRowLength = row.cells.length;
    // console.log(`Row no ${currentRowIndex + 1} has ${currentRowLength} cells`)
    console.log("Overall Row Index",row.rowIndex);
    console.log("Section Row Index",row.sectionRowIndex);
    console.log(row);
}


