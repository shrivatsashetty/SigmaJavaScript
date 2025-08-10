const slides = document.querySelectorAll(".slides img");
const btnNext = document.getElementById("btn-next");
const btnPrevious = document.getElementById("btn-previous");

let currenSlideIndex = 0;
let intervalFuncShowSlide;

/* a function to start showing the slides */
function intializeSlides() {
    slides[currenSlideIndex].classList.add("display-block");
    intervalFuncShowSlide = setInterval(showNextSlide , 2000);
}

function showNextSlide() {
    slides[currenSlideIndex].classList.remove("display-block");

    if(currenSlideIndex == 4) {
        currenSlideIndex = 0;
    }
    else {
        currenSlideIndex++;
    }
    slides[currenSlideIndex].classList.add("display-block");
}

function showPreviousSlide() {
    clearInterval(intervalFuncShowSlide); // suspends all of the clearInterval() functions

    slides[currenSlideIndex].classList.remove("display-block");

    if(currenSlideIndex == 0) {
        currenSlideIndex = 4;
    }
    else {
        currenSlideIndex--;
    }
    slides[currenSlideIndex].classList.add("display-block");
}

document.addEventListener(
    "DOMContentLoaded",
    intializeSlides
);

btnNext.addEventListener(
    "click",
    showNextSlide
);

btnPrevious.addEventListener(
    "click",
    showPreviousSlide
);
