function makeVisible(element, delay) {
    setTimeout(
        () => {element.removeAttribute("hidden");}, // makes the element visible by removing the hidden attribute
        delay
    );
}

let messages = document.querySelectorAll(".message");

makeVisible(messages[0], 1000);
makeVisible(messages[1], 5000);
makeVisible(messages[2], 9000);

let dotBox = document.querySelectorAll(".dots");


function setDots(dots) {
    dotBox[0].innerText = dots;
    dotBox[1].innerText = dots;
    dotBox[2].innerText = dots;
}

/* a function to append dots at the end of the messages */
let dots = "";

function appendDots() {
    
    dots += " .";

    if (dots.length == 8) {
        dots = "";
    }
    

    setDots(dots);
}

/* call the setDot function every 1 second */

setInterval(() => {
    appendDots();    
}, 1000);

