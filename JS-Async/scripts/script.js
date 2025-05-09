let timePara = document.getElementById("para-time");

function showTime() {
    let date = new Date();
    timePara.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

/* execute the function to display time every second */
window.setInterval(showTime, 1000);
