// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Resources_model = require("../models/resources_model.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/all", function(req, res) {
    Resources_model.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific book
  app.get("/api/:resource", function(req, res) {
    if (req.params.resource) {
      Resources_model.findAll({
        where: {
          title: req.params.resource
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all books of a specific genre
  app.get("/api/genre/:category", function(req, res) {
    if (req.params.category) {
      Resources_model.findAll({
        where: {
          genre: req.params.category
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all books from a specific author
  app.get("/api/contact/:contact", function(req, res) {
    if (req.params.contact) {
      Resources_model.findAll({
        where: {
          author: req.params.contact
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all "long" books (books 300 pages or more)
  // app.get("/api/books/long", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $gte: 300
  //       }
  //     },
  //     order: [["pages", "DESC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Get all "short" books (books 150 pages or less)
  // app.get("/api/books/short", function(req, res) {
  //   Book.findAll({
  //     where: {
  //       pages: {
  //         $lte: 150
  //       }
  //     },
  //     order: [["pages", "ASC"]]
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Add a book
  app.post("/api/new", function(req, res) {
    console.log("Resource Data:");
    console.log(req.body);
    Resources_model.create({
      resource: req.body.resource,
      category: req.body.category,
      contact: req.body.contact,
      email: req.body.email,
      number: req.body.number
    });
  });

  // Delete a book
  app.post("/api/delete", function(req, res) {
    console.log("Resource Data:");
    console.log(req.body);
    Resources_model.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
