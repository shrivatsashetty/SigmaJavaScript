console.log("Hello World!!!");
let firstBox = document.getElementById("b0");
firstBox.firstElementChild.innerHTML = firstBox.firstElementChild.innerHTML.concat( " ", "(First)" );

/* selecting elements by class name returns an HTMLCollection Object */ 
let boxes = document.getElementsByClassName("box");

/* manipulating the fonts using CSS */
for (const box of boxes) {
    box.style.fontWeight = "900";
    box.style.fontStyle = "italic";
    box.style.color = "red";
}

/* query the first matching element using a class */ 
let firstEvenPosBox = document.querySelector(".pos-even");
firstEvenPosBox.style.color = "green";

/* now select all the even positioned boxes 
this method returns an object of type NodeList*/ 
let evenPosBoxes = document.querySelectorAll(".pos-even");

/* using the Array.forEach method we iterate through every element of the NodeList*/ 
evenPosBoxes.forEach(element => {
    element.style.border = "5px dashed pink";
});


/* selecting all elements of a particular type 
the method returns an object of type HTMLCollection */ 
let paras = document.getElementsByTagName("p");

for (const element of paras) {
    element.style.backgroundColor = "skyblue";

}

/* check wether an element matches a given selector */ 
console.log(firstBox.matches("#b0")); // true

/* the below method selects the closest element with the specified selector */ 
console.log(firstEvenPosBox.closest(".container")) // div.container
console.log(firstEvenPosBox.closest("html")) // html

/* the below metod returns true 
if an element contains the specified element within it */ 
console.log(firstEvenPosBox.contains(paras[1])); // true

