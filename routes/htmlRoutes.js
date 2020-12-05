//Path package
const path = require('path');
const router = require("express").Router();

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
    console.log('**NOTES.HTML**')
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes respond with the index.html file
router.get("*", (req, res) => {
    console.log('**INDEX.HTML**')
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;