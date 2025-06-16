
function getRandomInt(max) {
    return Math.floor(Math.random() * (max) ) + 1;
}

function createDiceImg() {
    let imgDice = document.createElement("img");
    imgDice.classList.add("img-dice");
    let faceValue = getRandomInt(6);
    imgDice.src = `assets/dice_${faceValue}.svg`; // image path shold be relative to the html document
    return imgDice;
}

function main() {

    let numDice = document.getElementById("input-dice-count").value;
    numDice = Number(numDice);

    let diceHolder = document.getElementById("dice-holder");

    // empty the content before appending new img elements
    diceHolder.innerHTML = "";
    
    for (let i = 0; i < numDice; i++) {
        let dice = createDiceImg();
        diceHolder.appendChild(dice);
    }
    
}

document.getElementById("btn-roll-dice").addEventListener(
    "click",
    main
)