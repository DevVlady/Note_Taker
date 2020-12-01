const express = require('express');
const apiRoutes = require("./app/routes/apiRoutes");
const htmlRoutes = require("./app/routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// app.use(express.json({ type: 'application/**json' }))
// app.use(express.raw({ type: 'application/vnd.custom-type' }))
// app.use(express.text({ type: 'text.html' }))


require('./app/routes/apiRoutes.js', apiRoutes)(app);
require('./app/routes/htmlRoutes.js', htmlRoutes)(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});