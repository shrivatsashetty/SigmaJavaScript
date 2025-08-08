const btnPrevious = document.getElementById("btn-previous");
const btnNext = document.getElementById("btn-next");
const imgSupercar =  document.getElementById("img-supercar");

// to keep track of the index of the current car image to be shown
let imgIndex = 1; 

/* the below function will be called when the 
    next or the previous button will be clicked */
function changeImageIndex(incrementFlag) { 

    /* logic to change the index of the current car image */
    if(incrementFlag == 1 && imgIndex == 6) {
        imgIndex = 1;
    }
    else if (incrementFlag == -1 && imgIndex == 1) {
        imgIndex = 6;
    }
    else {
        imgIndex = imgIndex + incrementFlag;
    }
    
    imgSupercar.src = `./assets/images/supercar${imgIndex}.jpg`;
}

btnNext.addEventListener(
    "click",
    () => {
        changeImageIndex(1);
    }
);

btnPrevious.addEventListener(
    "click",
    () => {
        changeImageIndex(-1);
    }
);
