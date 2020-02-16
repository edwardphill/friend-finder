// npm require express and path

// Dependencies

var express = require("express");

// Configuration

var app = express();

// Port

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
