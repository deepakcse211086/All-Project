const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');

// Load notes from localStorage on page load
window.onload = function() {
    displayNotes();
};

// Function to add note
function addNote() {
    const noteText = noteInput.value.trim();
    if(noteText !== '') {
        let notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        displayNotes();
    }
}

// Add note on button click
addBtn.addEventListener('click', addNote);

// Add note on pressing Enter key
noteInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !e.shiftKey) { // Prevent adding on Shift+Enter (for new lines)
        e.preventDefault(); // Prevent default newline
        addNote();
    }
});

// Display notes
function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(noteItem);
    });
}

// Delete note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}