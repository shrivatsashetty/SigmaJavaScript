let boxes = document.getElementsByClassName("box");

let colors = ["red", "yellow", "green", "skyblue", "pink"];

/* The Fisher Yates shuffling Algorithm to randomly shuffle the elements of an array */ 
function fisherYatesShuffle(array) {
    for (let i = (array.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // i+1 specifies the upper limit for the random number
        [array[i], array[j]] = [array[j], array[i]]; // in-place swaping of array elements
    }
    return array;
}

function colorBoxes() {

    let shuffledColors = fisherYatesShuffle(colors);

    boxes[0].style.backgroundColor = shuffledColors[0];
    boxes[1].style.backgroundColor = shuffledColors[1];
    boxes[2].style.backgroundColor = shuffledColors[2];
    boxes[3].style.backgroundColor = shuffledColors[3];
    boxes[4].style.backgroundColor = shuffledColors[4];
}