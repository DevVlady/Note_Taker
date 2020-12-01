//Linking route to data sources which hold the arrays
const router = require("express").Router();
// const store = require("../data/db/store.js");
const noteData = require('../data/db.json');


//Routing info
module.exports = function(router) {
    // GET "/api/notes" responds with all notes from the database
    router.get("/api/notes", function(req, res) {
        res.json(noteData);
    })
    // router.get("/notes", (req, res) => {
    //     store
    //         .getNotes()
    //         .then((notes) => res.json(notes))
    //         .catch((err) => res.status(500).json(err));
    // });

    // POST "/api/notes"
    // Use addNote in the store object
    //Add new note to the api array
    router.post("/api/notes", function(req, res) {
        let newNote = req.query
        console.log(newNote)
        //Using push method to add the new note to the array
        noteData.push(newNote);
        res.json(noteData);
    })

    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
    // Use removeNote method in the store object
    // YOUR CODE HERE


    //Return notes saved in api array
    router.get("/api/notes/:title", function(req, res) {
        const title = req.params.title;
        res.json(noteData[title]);
    });
};

// module.exports = router;
