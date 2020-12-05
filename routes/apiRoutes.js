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
    store
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes:id", (req, res) => {
    console.log('**DELETE_METHOD**')
    // Use removeNote method in the store object
    store
        .removeNote(req.params.id - 1)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
})

module.exports = router;







    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
//     router.delete("/api/notes/:id", function (req, res) {
//         console.log('**DELETE_METHOD**')
//         const notesDeleted = req.params.id - 1;
//         fs.readFile("./data/db.json", function (err, data) {
//             if (err) throw err;
//             let allNotes = JSON.parse(data);

//             function searchNotes(notesDeleted, allNotes) {
//                 console.log('NotesDeleted',notesDeleted)
//                 console.log('allNotes', allNotes)
//                 console.log('searchNotes()')
//                 for (var i = 0; i < allNotes.length; i++) {
//                     if (allNotes[i].id === notesDeleted) {
//                         allNotes.splice([i], 1);
//                     }
//                 }
//             }
//             searchNotes(notesDeleted, allNotes);

//             fs.writeFile("./data/db.json", JSON.stringify(allNotes, null, 2), (err) => {
//                 if (err) throw err;
//                 res.send('200')
//             });
//         });
//     });
