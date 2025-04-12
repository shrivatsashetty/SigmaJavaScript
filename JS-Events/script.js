let container1 = document.querySelector(".container-1");

btn1 = document.getElementById("btn-1");

/* adding a simple event listener */ 
btn1.addEventListener( "click", (e) => {alert("Hello World!!!")} );

/* adding a detailed event handler
to handle a mouse double click event */ 
btn2 = document.querySelector("#btn-2");

btn2.addEventListener("dblclick", e => {
    window.alert("btn-2 double clicked!!\nCheck Console for details");
    console.log("Event:", e);
    console.log("Event Target:", e.target);
    console.log("Current Target:", e.currentTarget);
    console.log("this === e.target:", this === e.target);
    console.log("this object:", this);
});

/* handling a right click event */ 
btn3 = document.getElementById("btn-3");

btn3.addEventListener(
    "contextmenu", 
    e => {
        alert("btn-3 right clicked!!!")
    }
);

