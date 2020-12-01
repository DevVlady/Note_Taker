//Path package
const path = require('path');
const router = require("express").Router();


//Route the path
module.exports = function(router) {
    // "/notes" responds with the notes.html file
    // YOUR CODE HERE
    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });

    // All other routes respond with the index.html file
    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

    //If no route then default to index
    // router.use( function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/index.html"));
    // });

    // console.log(__dirname + "/public/index.html")
};

// module.exports = router;