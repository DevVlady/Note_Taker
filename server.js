const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const fs = require('fs');
// const { promisify } = require('util');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/**json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text.html' }))

// app.use(bodyParser.static(__dirname + 'public'));

//Includes HTML routes using express
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});