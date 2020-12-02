//Path package
const path = require('path');
const router = require("express").Router();


//Route the path
module.exports = function(router) {
    // "/notes" responds with the notes.html file
    router.get("/notes", function(req, res) {
        console.log('**HTML_ROUTES-GET_METHOD**')
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // All other routes respond with the index.html file
    router.get("*", function(req, res) {
        console.log('*******')
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // console.log(__dirname + "/public/index.html*******")
};