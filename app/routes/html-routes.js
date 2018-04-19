//

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// var jwt = require('express-jwt');
// var ham = "P6VuDoaScYM5MbA4Oz-onsTjuVbQFTWcOO9ZkD2w3Dd5B43lMXYppWTp1U_b7e4G";
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render('index');
  });

  // add route loads the a dd.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {
    res.render('add');
  });



  // all route loads the all.html page, where all books in the db are displayed
  app.get("/all", function(req, res) {
    res.render('all');
  });

  app.get('/logout', function(req, res){
    res.redirect('https://jdqtz.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A8080%2Floggedout&client_id=C3uimLj64ZbCZ3XxjiQ5T-mRt92h5u12');
    
  })

  app.get("/loggedout", function(req, res) {
    res.render('logout');
  });

  // short route loads the short.html page, where short books in the db are displayed
  // app.get("/short", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/short.html"));
  // });
  //
  // // long route loads the long.html page, where long books in the db are displayed
  // app.get("/long", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/long.html"));
  // });

};
