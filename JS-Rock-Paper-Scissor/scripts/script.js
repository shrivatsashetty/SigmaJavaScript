import {rock, paper, scissor} from "./utils.js"

/* global variables */
let userChoice;
let computerChoice;
let scoreUser = 0;
let scoreComputer = 0;

let mssgBox = document.getElementById("mssg-box");

let lblOutcomes = document.getElementsByClassName("lbl-outcome");

let tblScoreCells = document.getElementById("scores-table").querySelector("tbody").rows[0].cells;


// let choices = [rock, paper, scissor];
// console.log(choices[0]);
// console.log(choices[1]);
// console.log(choices[2]);
// // debugger;


/* a function to generate random number from 0 to given number,
we'll use this function to make random choices by computer */
function getRandomInt(max) {
  return Math.floor(Math.random() * max); // max specifies the max limit of the genetated random number
}

function initiateUserChoice(idx) {
    userChoice = choices[idx];
    lblOutcomes[0].textContent = `USER: ${userChoice.desc}`;
}

function initiateComputerChoice(idx) {
    computerChoice = choices[idx];
    lblOutcomes[1].textContent = `COMPUTER: ${computerChoice.desc}`;
}

function announceWinner(winner) {
    switch (winner) {
        case 1:
            mssgBox.style.color = "lightgreen";
            mssgBox.innerText = "You Win!!!";
            break;
        case 2:
            mssgBox.style.color = "red";
            mssgBox.innerText = "You Loose!!!";
            break;
    }    
}

function allocatePoints() {
    if(userChoice == computerChoice) {
        mssgBox.style.color = "black";
        mssgBox.innerText = "It's a Tie!!!";
    }
    else if(userChoice.winsOver == computerChoice) {
        scoreUser += 1;
        mssgBox.style.color = "lightgreen";
        mssgBox.innerText = "Your Point!!!";
        tblScoreCells[0].innerText = scoreUser;
    }
    else {
        scoreComputer += 1;
        mssgBox.style.color = "red";
        mssgBox.innerText = "Computer's Point!!!";
        tblScoreCells[1].innerText = scoreComputer;
    }

    if(scoreUser != 0 && scoreUser%5 == 0) {
        announceWinner(1);
    }
    else if(scoreComputer != 0 && scoreComputer%5 == 0) {
        announceWinner(2);
    }
}

/* event listners */
document.getElementById("game-controls").addEventListener(
    "click",
    (e) => {
        if(e.target.classList.contains("btn")) {
            initiateUserChoice(parseInt(e.target.value) - 1);
            initiateComputerChoice(parseInt(getRandomInt(3)));
            allocatePoints();
        }
        e.stopPropagation();
    }
);

