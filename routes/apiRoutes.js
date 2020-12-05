const router = require("express").Router();
const store = require("../db/store");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
    console.log('**GET_METHOD**')
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// POST "/api/notes"
router.post("/notes", (req, res) => {
    console.log('**POST_METHOD**')
    // Use addNote in the store object
    console.log('req.body', req.body)

    store
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
    console.log('**DELETE_METHOD**')
    // Use removeNote method in the store object
    console.log('req.params.id', req.params.id)
    store
        .removeNote(req.params.id)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
})

module.exports = router;