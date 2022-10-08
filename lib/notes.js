const path = require("path");
const fs = require("fs");

// Find the note within the array by its id
function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

// Create a new note and return all of the notes in a new array
function createNewNote(body, notesArray) {
  notesArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return body;
}

// Remove a note by splicing it and returning a new array of the notes that are left
function removeNote(note, notesArray) {
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);
  console.log(index);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notesArray;
}

module.exports = { findById, removeNote, createNewNote };
