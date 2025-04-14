
let grandParent = document.getElementById("b1");
let parent = document.getElementById("b2");
let child = document.getElementById("b3");

child.addEventListener(
    "click",
    (event) => {
        alert("Child was clicked!!!");
        event.stopPropagation(); // Prevents the event from bubbling up further.
    }
);

parent.addEventListener(
    "click",
    (event) => {
        alert("Parent container was clicked!!!");
    }
);

grandParent.addEventListener(
    "click",
    (event) => {
        alert("Grandparent Container was clicked!!!");
    }
);

/* example of removing an event listner */ 
function alerHelloWorld() {
    window.alert("Hello World!!!");
}


grandParent.addEventListener(
    "click",
    alerHelloWorld
);

/* removing an eventListner */ 
grandParent.removeEventListener(
    "click",
    alerHelloWorld
);
