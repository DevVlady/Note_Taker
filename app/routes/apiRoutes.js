//Load data
//Linking route to data sources which hold the arrays
var noteData = require("../data/db.json");

//Routing info
module.exports = function(app) {
    //API GET method request

    //Get method for the notes inside the list
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    })

    //Method to post the notes and save them when the save buttom is clicked
    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
        console.log(newNote);

        noteData.push(newNote);
        res.json(newNote);
    })

};