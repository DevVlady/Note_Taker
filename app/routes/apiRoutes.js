//Linking route to data sources which hold the arrays
var noteData = require("../data/db.json");

//Routing info
module.exports = function(app) {
    //Get method for the notes inside the list
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    })

};