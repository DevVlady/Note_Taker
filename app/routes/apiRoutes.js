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

    app.get("api/:noteData?", function(req, res) {
        var selected = req.params.noteData;
        console.log(selected);
        res.end();
    });

    //Get mothod for the note lists
    // app.get("/api/lists", function(req, res) {
    //     res.json(noteList);
    // })

};