// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Resources_model = sequelize.define("resources_table", {
  resource: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.INTEGER
  }
});

// Syncs with DB
Resources_model.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Resources_model;
