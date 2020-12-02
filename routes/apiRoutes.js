//Linking route to data sources which hold the arrays
const router = require("express").Router();
const noteData = require('../data/db.json');
const fs = require('fs');


module.exports = function (router) {
    // GET "/api/notes" responds with all notes from the database
    router.get("/api/notes", function (req, res) {
        console.log('**GET_METHOD**')
        fs.readFile("./data/db.json", function (err, data) {
            console.log(noteData)
            //Throw err code if err
            if (err) throw err;
            let allNotes = JSON.parse(data);
            return res.json(allNotes);
        })
    })

    // POST "/api/notes"
    router.post("/api/notes", function (req, res) {
        console.log('**POST_METHOD**')
        const {body: {title, text}} = req;

        let newNote = {
            "title": title,
            "text": text
        }
        noteData.push(newNote);
        res.json(noteData);
    })

    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
    router.delete("/api/notes/:id", function (req, res) {
        console.log('**DELETE_METHOD**')
        const notesDeleted = req.params.id;
        fs.readFile("./data/db.json", function (err, data) {
            if (err) throw err;
            let allNotes = JSON.parse(data);

            function searchNotes(notesDeleted, allNotes) {
                console.log('searchNotes()')
                for (var i = 0; i < allNotes.length; i++) {
                    if (allNotes[i].id === notesDeleted) {
                        allNotes.splice([i], 1);
                    }
                }
            }
            searchNotes(notesDeleted, allNotes);

            fs.writeFile("./data/db.json", JSON.stringify(allNotes, null, 2), (err) => {
                if (err) throw err;
                res.send('200')
            });
        });
    });

    // Return notes saved in api array
    router.get("/api/notes", function (req, res) {
        console.log('**LAST GET METHOD****')
        // const title = req.params.title;
        res.json(noteData);
    });
}
