
let grandParent = document.getElementById("b1");
let parent = document.getElementById("b2");
let child = document.getElementById("b3");

child.addEventListener(
    "click",
    (event) => {
<<<<<<< HEAD
        console.log(event.bubbles); // true
=======
>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
        alert("Child was clicked!!!");
        event.stopPropagation(); // Prevents the event from bubbling up further.
    }
);

parent.addEventListener(
    "click",
    (event) => {
<<<<<<< HEAD
        console.log(event.bubbles); // true
=======
>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
        alert("Parent container was clicked!!!");
    }
);

grandParent.addEventListener(
    "click",
    (event) => {
<<<<<<< HEAD
        console.log(event.bubbles); // true
=======
>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
        alert("Grandparent Container was clicked!!!");
    }
);

/* example of removing an event listner */ 
function alerHelloWorld() {
    window.alert("Hello World!!!");
}

<<<<<<< HEAD
document.addEventListener(
    "click",
    e => {
        window.alert("Document was clicked!!!");
    }
);

/* example of removing an event listner */
=======

>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
grandParent.addEventListener(
    "click",
    alerHelloWorld
);

<<<<<<< HEAD
=======
/* removing an eventListner */ 
>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
grandParent.removeEventListener(
    "click",
    alerHelloWorld
);
<<<<<<< HEAD

=======
>>>>>>> e863584ccc2f498dfb18edb58ece4e433b865f6f
