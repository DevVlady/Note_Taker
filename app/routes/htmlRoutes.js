//Path package
var path = require('path');

//Route the path
module.exports = function(app) {
    //Get request HTML
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });

    //If no route then default to index
    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    // console.log(__dirname + "/public/index.html")
};