const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

apiRoutes(app);
htmlRoutes(app);

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);



//Port Listeniing
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});