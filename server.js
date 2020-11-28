const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.json({ type: 'application/**json' }))

app.use(express.raw({ type: 'application/vnd.custom-type' }))

app.use(express.text({ type: 'text.html' }))

app.use(express.static(__dirname + 'public'));





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});