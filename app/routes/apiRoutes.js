//Linking route to data sources which hold the arrays
const noteData = require('../data/db.json');
const bodyParser = require('body-parser');


//Routing info
module.exports = function(app) {
    //Get method for the notes inside the list
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    })

    //Add new note to the api array
    app.post("/api/notes", function(req, res) {
        let newNote = req.query
        console.log(newNote)
        //Using push method to add the new note to the array

        noteData.push(newNote);
        res.json(noteData);
    })

    //Return notes saved in api array
    app.get("/api/notes/:title", function(req, res) {
        const title = req.params.title;
        res.json(noteData[title]);
    });
};