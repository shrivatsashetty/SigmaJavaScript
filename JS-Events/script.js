btn1 = document.getElementById("btn-1");

// btn1.addEventListener("click", function (e) {
//     alert("Button Clicked");
//     console.log(e); // script.js:5 PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
//     console.log("Event Target:", e.currentTarget); // Event Target: <button id=​"btn-1">​Click Me​</button>​
//     console.log(e.currentTarget === this); // false
//     console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    
// })

/* adding a simple event listener */ 
btn1.addEventListener( "click", (e) => {alert("Hello World!!!")} );

/* adding a detailed event handler */ 
btn2 = document.querySelector("#btn-2");

btn2.addEventListener("dblclick", e => {
    window.alert("btn-2 double clicked!!\nCheck Console for details");
    console.log("Event:", e);
    console.log("Event Target:", e.target);
    console.log("Current Target:", e.currentTarget);
    console.log("this === e.target:", this === e.target);
    console.log("this object:", this);
});

