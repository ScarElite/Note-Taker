const router = require("express").Router();
const noteRoutes = require("./noteRoutes");

// Tells router to use noteRoutes instead of the index.js
router.use(noteRoutes);

module.exports = router;
