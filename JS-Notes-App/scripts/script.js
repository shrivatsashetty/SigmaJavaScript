/* global elements */

let formUserNote = document.getElementById("form-notes");
let noteTitle = document.getElementById("note-title");
let noteContent = document.getElementById("note-content");

let btnSubmitForm = document.getElementById("btn-submit-form");

/* declare an object to store the notes entered by user */
let userNotes = {
    title: "",
    content: ""
};

/* get the notes from local storage if any saved, this will be a string */
let savedNotes = localStorage.getItem("usernotes");

if(savedNotes) {
    userNotes = JSON.parse(savedNotes);
    noteTitle.value = userNotes.title;
    noteContent.value = userNotes.content;
}


formUserNote.addEventListener(
    "submit",
    (e) => {
        e.preventDefault();
        userNotes.title = noteTitle.value;
        userNotes.content = noteContent.value;
        
        localStorage.setItem("usernotes", JSON.stringify(userNotes));
    }
);

