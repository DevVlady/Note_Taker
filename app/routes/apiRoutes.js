//Linking route to data sources which hold the arrays
const router = require("express").Router();
const noteData = require('../data/db.json');
const fs = require('fs');

module.exports = function(router) {
    // GET "/api/notes" responds with all notes from the database
    router.get("/api/notes", function(req, res) {
        console.log('api/notes')
        fs.readFile(noteData, function(err, data) {
            //Throw err code if err
            if (err) throw err;
            let allNotes = JSON.parse(data);
            return res.json(allNotes);
        })
    })

    // POST "/api/notes"
    router.post("/api/notes", function(req, res) {
        let noteSaved = JSON.stringify(fs.readFileSync('..data/db.json', utf8));
        console.log('..data/db.json')
        //Create new note variable
        let newNote = req.query
        console.log(newNote)
        //Using push method to add the new note to the array
        noteData.push(newNote);
        res.json(noteData);

        fs.writeFileSync(noteData, JSON.stringify(noteSaved), (err) => {
            if(err) throw err;
            console.log("ERROR")
        });
        return res.json(noteSaved);
    })

    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
    // Use removeNote method in the store object
    // YOUR CODE HERE


    //Return notes saved in api array
    router.get("/api/notes", function(req, res) {
        // const title = req.params.title;
        res.json(noteData);
    });
}

// module.exports = router;