// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


//Create a "resources_category" model that matches up with DB. 
// this is where our SQL table for "resources_table" will be created and defined
var Resources_model = sequelize.define("resources_table", {
  username: {
    type: Sequelize.STRING
  },
  business_name: {
    type: Sequelize.STRING,
    unique: true
  },
  business_category: {
    type: Sequelize.STRING
  },
  city_dept: {
    type: Sequelize.STRING
  },
  sub_category1: {
    type: Sequelize.STRING
  },
  sub_category2: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  ethnicity: {
    type: Sequelize.STRING
  },
  ethnicity2: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  business_description: {
    type: Sequelize.TEXT
  },
  street_address: {
    type: Sequelize.STRING
  },
  business_city: {
    type: Sequelize.STRING
  },
  business_state: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.INTEGER
  },
  business_email: {
    type: Sequelize.STRING
  },
  business_url: {
    type: Sequelize.STRING
  },
  business_fb: {
    type: Sequelize.STRING
  },
  main_contact: {
    type: Sequelize.STRING
  },
  contact_title: {
    type: Sequelize.STRING
  },
  contact_phone: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

Resources_model.sync();

// Makes the Resources Model available for other files (will also create a table)
module.exports = Resources_model;