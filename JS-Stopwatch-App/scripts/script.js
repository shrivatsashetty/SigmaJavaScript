/* global variables for time calculation */
let timeStart = Date.now();
let timeElapsed = 0;
let timePaused = 0;
let isRunning = false;
let isPaused = true;

/* UI elements */
const lblTime = document.getElementById("lbl-time");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

btnStart.addEventListener(
    "click",
    () => {
        isRunning = true;
        isPaused = false;
    }
);

btnStop.addEventListener(
    "click",
    () => {
        isPaused = true;
        isRunning = false;
    }
);

btnReset.addEventListener(
    "click",
    () => {
        timeStart = Date.now();
        timeElapsed = 0;
        timePaused = 0;
        isRunning = false;
        isPaused = true;
        lblTime.innerText = `00:00:00:000`;
    }
);

let lblMiliSec;
let lblSec;
let lblMins;
let lblHours;

/* for when the countdown is paused */
setInterval(
    () => {
        if(isPaused) {
            timePaused = Date.now() - (timeStart + timeElapsed);
        }
    }
    , 1
);

/* for starting the countdown */
setInterval(
    () => {
        if (isRunning) {
            timeElapsed = Date.now() - (timeStart + timePaused);
            lblMiliSec = (timeElapsed % 1000).toString().padStart(3, "0");
            lblSec = (Math.floor(timeElapsed / 1000) % 60).toString().padStart(2, "0");
            lblMins = (Math.floor(timeElapsed / (1000 * 60)) % 60).toString().padStart(2, "0");
            lblHours = (Math.floor(timeElapsed / (1000 * 60 * 60)) % 60).toString().padStart(2, "0");

            /* set the time label */
            lblTime.innerText = `${lblHours}:${lblMins}:${lblSec}:${lblMiliSec}`;
        }
    }
    , 1
);


