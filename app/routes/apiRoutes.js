//Load data
//Linking route to data sources which hold the arrays
var noteData = require("..data/noteData");
var noteList = require("..data/noteListData");

//Routing info
module.exports = function(app) {
    //API GET method request

    //Get method for the notes inside the list
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    })

    //Get mothod for the note lists
    app.get("/api/lists", function(req, res) {
        res.json(noteList);
    })


    //API POST Method
    app.post("/api/notes", function(req, res) {
        if (noteData) {
            noteData.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    });

    //Write code to delete lists when the delete button is pressed

};