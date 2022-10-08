const path = require("path");
const fs = require("fs");

// Find within the note within the array by its id
function findById(id, notesArr) {
  const result = notesArr.filter((note) => note.id === id)[0];
  return result;
}

// Create a new note and return all the notes in a new array
function createNewNote(body, notesArr) {
  notesArr.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArr }, null, 2)
  );
  return body;
}

// Remove a note by splice and returning a new array of the notes that are left
function removeNote(note, notesArr) {
  const index = notesArr.indexOf(note);
  notesArr.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArr }, null, 2)
  );
  return newNotesArr;
}

module.exports = { findById, removeNote, createNewNote };
