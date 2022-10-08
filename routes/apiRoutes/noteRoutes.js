const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { findById, removeNote, createNewNote } = require("../../lib/notes");
const uuid = require("uuid");

// Get notes from the array
router.get("/notes", (req, res) => {
  res.json(notes);
});

router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// Create a new note and give it a unique id
router.post("/notes", (req, res) => {
  req.body.id = uuid.v4();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

// Remove a note by its unique id
router.delete("/notes/:id", (req, res) => {
  const note = findById(req.params.id, notes);
  removeNote(note, notes);
  res.json();
});

module.exports = router;
