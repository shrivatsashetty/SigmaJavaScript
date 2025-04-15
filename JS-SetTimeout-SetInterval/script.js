
let grandParent = document.getElementById("b1");
let parent = document.getElementById("b2");
let child = document.getElementById("b3");

function getRandomColor() {
    const intensityRed = Math.ceil(Math.random() * 255);
    const intensityGreen = Math.ceil(Math.random() * 255);
    const intensityBlue = Math.ceil(Math.random() * 255);
    /* return an RGB color value */ 
    return `rgb(${intensityRed}, ${intensityGreen}, ${intensityBlue})` ;
}

window.setInterval(
    () => {
        parent.style.backgroundColor = getRandomColor();
    },
    2000 // the unit is in miliseconds
);

window.setTimeout(
    () => {
        grandParent.style.backgroundColor = getRandomColor();
    }, 
    3000
);

let childColorChange = window.setInterval(
    () => {
        child.style.backgroundColor = getRandomColor();
    },
    500
)

/* removing the setInterval event */
window.clearInterval(childColorChange);

/* similarly use the window.clearTimeout method to delete any of the timeOut functions */ 