const path = require("path");
const router = require("express").Router();

// Route to serve notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// Serves the index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public,index.html"));
});

// For any other endpoint that might be entered in by the user but is not routed anywhere
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
