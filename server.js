const express = require('express');
const apiRoutes = require("./app/routes/apiRoutes");
const htmlRoutes = require("./app/routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./app/public'));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});