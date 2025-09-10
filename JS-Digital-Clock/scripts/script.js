
let clock = document.getElementById("clock");

function displayCurrentTime() {

    let date = new Date();

    let currentHour24 = date.getHours(); // will return hour in 24 hrs format

    let currentHour12 = date.getHours() % 12 || 12; // for 12:00 & 24:00 Hrs
    currentHour12 = currentHour12.toString().padStart(2, "0");

    let currentMinute = date.getMinutes().toString().padStart(2, "0");
    
    let currentSecond = date.getSeconds().toString().padStart(2, "0");

    let meridiem = (currentHour24 < 12) ? "AM" : "PM";

    let strCurrentTime = `${currentHour12}:${currentMinute}:${currentSecond} ${meridiem}`;

    // console.log(strCurrentTime); // 8 : 48 : 3 PM
    clock.innerText = strCurrentTime;
}


setInterval(displayCurrentTime, 1000);