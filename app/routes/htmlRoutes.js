//Path package
var path = require("path");

//Route the path
module.exports = function(app) {
    //Get request HTML
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__driname, "..public/notes.html"));
    });

    //If no route then default to index
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};