const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const addBtn = document.getElementById("add-btn");
const notesGrid = document.getElementById("notes-grid");

addBtn.onclick = function() {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        alert("Please fill in both the title and content fields.");
        return; 
    } 

    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn">Delete</button>
    `;

    const deleteBtn = noteCard.querySelector(".delete-btn");
    
    deleteBtn.onclick = function () {
        notesGrid.removeChild(noteCard);
    };

    notesGrid.appendChild(noteCard);
    
    noteTitle.value = "";
    noteContent.value = "";
};