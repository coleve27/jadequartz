// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Resources_model = require("../models/resources_model.js");
var db = require("../models");
var jwt = require('express-jwt');
// var jwt = require('jsonwebtoken');
var secret = "2dW0QPvyuKgd_vcdGt-gV5Si_OFiPyWF4qCScP0dVifBr5uxfymFwXuAVO3LGO5o";

var fs = require('fs');
var publicKey = fs.readFileSync('./jdqtz.cer');

console.log("api routes called");
// Routes
// =============================================================
module.exports = function (app) {
  // Get all books
  app.get("/api/all", function (req, res) {
    db.Resources_model.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get a specific book
  // app.get("/api/:business_name", function (req, res) {
  //   if (req.params.business_name) {
  //     Resources_model.findAll({
  //       where: {
  //         business_name: req.params.business_name
  //       }
  //     }).then(function (results) {
  //       res.json(results);
  //     });
  //   }
  // });


  // Get all resources of a specific category
  app.get("/api/:sub_category1", function (req, res) {
    if (req.params.sub_category1) {
      db.Resources_model.findAll({
        where: {
          sub_category1: req.params.sub_category1
        }
      }).then(function (results) {
        res.json(results);
      });
    }
  });

  // Get all books from a specific ethnicity
  app.get("/api/group/:ethnicity", function (req, res) {
    if (req.params.ethnicity) {
      db.Resources_model.findAll({
        where: {
          ethnicity: req.params.ethnicity
        }
      }).then(function (results) {
        res.json(results);
      });
    }
  });


  // TODO: See the code below, this should be what the
  //first line of both app.post (new and delete) look like if you are usig express jwt
  //("/api/new", jwt({secret: 'ham'}), function(req, res)

  /*
  app.get('/protected',
  jwt({secret: 'shhhhhhared-secret'}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });
  */

  // Add a book
  app.post("/api/new", jwt ({ secret: publicKey }),
  function (req, res) {

    console.log("Resource Data:");
    console.log(req.body);

    db.Resources_model.create({
      id: req.body.id,
      username: req.body.username,
      business_name: req.body.business_name,
      business_category: req.body.business_category,
      city_dept: req.body.city_dept,
      sub_category1: req.body.sub_category1,
      sub_category2: req.body.sub_category2,
      ethnicity: req.body.ethnicity,
      ethnicity2: req.body.ethnicity2,
      business_description: req.body.business_description,
      street_address: req.body.street_address,
      business_city: req.body.business_city,
      business_state: req.body.business_state,
      zip_code: req.body.zip_code,
      phone_number: req.body.phone_number,
      business_email: req.body.business_email,
      business_url: req.body.business_url,
      business_fb: req.body.business_fb,
      main_contact: req.body.main_contact,
      contact_title: req.body.contact_title,
      contact_phone: req.body.contact_phone,
      contact_email: req.body.contact_email
    }).then(data=>res.json(data),err=>res.json(err));
  });

  //TEST THIS
  // Update a specific resource
  app.put("/api/update",  jwt ({ secret: publicKey }),
  function (req, res)  {
    console.log("Data to be updated: ");
    console.log(req.body);

    db.Resources_model.update({
      id: req.body.id,
      username: req.body.username,
      business_name: req.body.business_name,
      business_category: req.body.business_category,
      city_dept: req.body.city_dept,
      sub_category1: req.body.sub_category1,
      sub_category2: req.body.sub_category2,
      ethnicity: req.body.ethnicity,
      ethnicity2: req.body.ethnicity2,
      business_description: req.body.business_description,
      street_address: req.body.street_address,
      business_city: req.body.business_city,
      business_state: req.body.business_state,
      zip_code: req.body.zip_code,
      phone_number: req.body.phone_number,
      business_email: req.body.business_email,
      business_url: req.body.business_url,
      business_fb: req.body.business_fb,
      main_contact: req.body.main_contact,
      contact_title: req.body.contact_title,
      contact_phone: req.body.contact_phone,
      contact_email: req.body.contact_email
    }, {
      where: {
        id: req.body.id
      }.then(function (results) {
        //res.json(results);
        console.log(results);
      })
    });
  });

  // Delete a book
  app.post("/api/delete", jwt ({ secret: publicKey }),
  function (req, res)  {
    console.log("Resource Data:");
    console.log(req.body);
    db.Resources_model.destroy({
      where: {
        id: req.body.id
      }
    });
  });
}

  // app.post("/api/login",
  //function (req, res) {
    //if (!req.user.admin) return res.sendStatus(401);
   // res.sendStatus(200);
    //decide on jwt decoder//



    // important examples
    //   app.post('/api/addNew', jwt(secret: 'ham'), function(req, res){
    //     db.record.create({
    //       userId: req.user.userId.split('|')[1],
    //       otherStuff: ''
    //     })
    // })

    //get information and put in sequal//
   //console.log("Response", res.req.body.idToken);
    //var idToken = res.req.body.idToken;
    //var decoded = jwt.decode(idToken);
    //console.log(decoded); // bar
 // });
//
