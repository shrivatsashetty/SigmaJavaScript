let container1 = document.querySelector(".container-1");

let btn1 = document.getElementById("btn-1");

/* adding a simple event listener */ 
btn1.addEventListener( "click", (e) => {alert("Hello World!!!")} );

/* adding a detailed event handler
to handle a mouse double click event */ 
let btn2 = document.querySelector("#btn-2");

btn2.addEventListener("contextmenu", e => {
    window.alert("btn-2 double clicked!!\nCheck Console for details");
    console.log("Event:", e);
    console.log("Event Target:", e.target);
    console.log("Current Target:", e.currentTarget);
    console.log("this === e.target:", this === e.target);
    console.log("this object:", this);
});

/* handling a right click event */ 
let btn3 = document.getElementById("btn-3");

btn3.addEventListener(
    "dblclick",
    e => {
        e.currentTarget.previousElementSibling.toggleAttribute("checked"); // toggle the neighbouring checkbox 
    }
);

/* mouse enter event */
let box4 = document.querySelector("#b4");
/* getting an element within an element */
let smileyGif = box4.getElementsByTagName("img")[0];

function zoomElement(element) {
    element.style.height = "64px";
    element.style.width = "64px";
}

function resizeElement(element) {
    element.style.height = "32px";
    element.style.width = "32px";
}

/* a function to zoom the image */
smileyGif.addEventListener(
    "mouseenter",
    e => {
        zoomElement(e.target);
    }
);

smileyGif.addEventListener(
    "mouseleave",
    function() {
        resizeElement(this); // this will be binded to the EventTarget object
    }
);

// let box5 = document.getElementsByClassName("box")[4];
let box5 = document.getElementById("b5");

box5.addEventListener(
    "keydown",
    event => {
        alert(`"${event.key}" Key pressed, check console for details.`);
        console.log(event);
        console.log("Key Pressed:", event.key);
    }
);

/* form events */ 
let dataForm = document.getElementsByTagName("form")[0];

/* a funtion to generate a random color */
function getRandomColor() {
    const intensityRed = Math.ceil(Math.random() * 255);
    const intensityGreen = Math.ceil(Math.random() * 255);
    const intensityBlue = Math.ceil(Math.random() * 255);
    /* return an RGB color value */ 
    return `rgb(${intensityRed}, ${intensityGreen}, ${intensityBlue})` ;
}

let inputName = document.getElementById("input-name");

inputName.addEventListener(
    "blur",
    e => {
        let username = e.target.value;

        if(username !== null && username !== "") {
            e.target.value = e.target.value.toUpperCase();
        }
        else {
            alert("Please Enter Username!!")
        }

    }
);

let inputEmail = document.getElementById("input-email");

inputEmail.addEventListener(
    "focus",
    e => {
        e.target.style.backgroundColor = getRandomColor();
    }
);
