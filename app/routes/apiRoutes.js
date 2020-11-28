//Linking route to data sources which hold the arrays
var noteData = require("../data/db.json");

//Routing info
module.exports = function(app) {
    //Get method for the notes inside the list
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    })

    //Return notes saved in api array
    app.get("/api/notes/:title", function(req, res) {
        const title = rq.params.title;
        res.json(noteData[title]);
    });

    //Add new note to the api array
    

};