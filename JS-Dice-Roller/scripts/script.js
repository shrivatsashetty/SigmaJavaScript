
function getRandomInt(max) {
    return Math.floor(Math.random() * (max) ) + 1;
}

function createDiceImg() {
    let imgDice = document.createElement("img");
    imgDice.classList.add("img-dice");
    let faceValue = getRandomInt(6);
    imgDice.src = `assets/dice_${faceValue}.svg`; // image path shold be relative to the html document
    return {imgDice: imgDice, faceValue: faceValue};
}

function main() {

    let numDice = document.getElementById("input-dice-count").value;
    numDice = Number(numDice);

    let diceHolder = document.getElementById("dice-holder");

    // empty the content before appending new img elements
    diceHolder.innerHTML = "";
    
    const faceValues = [];

    for (let i = 0; i < numDice; i++) {
        let dice = createDiceImg();
        diceHolder.appendChild(dice.imgDice);
        faceValues.push(dice.faceValue);
    }

    console.log(faceValues.join(", "));

    const paraFaceValues = document.getElementById("para-face-values");
    paraFaceValues.innerText = `Face Values: ${faceValues.join(", ")}`

    const totalPoints = faceValues.reduce((accumulator, currentValue) => accumulator + currentValue );
    document.getElementById("para-total-score").innerText = `Total Score: ${totalPoints}`;
    
    
}

document.getElementById("btn-roll-dice").addEventListener(
    "click",
    main
)