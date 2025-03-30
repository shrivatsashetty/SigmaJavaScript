let boxes = document.getElementsByClassName("box");

function getRandomColor() {
    const intensityRed = Math.ceil(Math.random() * 255);
    const intensityGreen = Math.ceil(Math.random() * 255);
    const intensityBlue = Math.ceil(Math.random() * 255);
    /* return an RGB color value */ 
    return `rgb(${intensityRed}, ${intensityGreen}, ${intensityBlue})` ;
}

function colorBoxes() {
    // converting the HTMLCollection to an Array so that we can use Array.forEach() method over it
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = getRandomColor();
        box.style.color = getRandomColor();
    });
}

