const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const app = express();
const PORT = process.env.PORT || 8080;

//Get Saved Notes
var savedNotes = promisify(fs.readFile);

//Parse application
app.use(express.urlencoded({ extended: true }));
//Parse application/json
app.use(express.json());

app.use(express.static(__dirname + 'public'));

// app.use(function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted:\n');
//     res.end(JSON.stringify(req.body, null, 2))
// });

//Includes HTML routes using express
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});