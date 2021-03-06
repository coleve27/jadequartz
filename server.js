// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./app/models");
var exphbs  = require('express-handlebars');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// setting up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public", {extensions:['html']}));



// Routes
// =============================================================

var routes = require
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

//call jwt after routes//


// verify a token symmetric - synchronous



// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function(){
  app.listen(PORT)
});
