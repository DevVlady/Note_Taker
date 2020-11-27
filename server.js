var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// app.get('/', function (req, res) {
//     res.send('Blah Blah Blah...TEST')
// })

//Parse application
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

// app.use(express.static('public'));

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