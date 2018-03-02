// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");


//Create a "resources_category" model that matches up with DB.
// this is where our SQL table for "resources_table" will be created and defined
module.exports = function(sequelize, Datatypes){
var Resources_model = sequelize.define("resources_table", {
  username: {
    type: Datatypes.STRING
  },
  business_name: {
    type: Datatypes.STRING,
    unique: true
  },
  business_category: {
    type: Datatypes.STRING
  },
  city_dept: {
    type: Datatypes.STRING
  },
  sub_category1: {
    type: Datatypes.STRING
  },
  sub_category2: {
    type: Datatypes.STRING,
    defaultValue: null
  },
  ethnicity: {
    type: Datatypes.STRING
  },
  ethnicity2: {
    type: Datatypes.STRING,
    defaultValue: null
  },
  business_description: {
    type: Datatypes.TEXT
  },
  street_address: {
    type: Datatypes.STRING
  },
  business_city: {
    type: Datatypes.STRING
  },
  business_state: {
    type: Datatypes.STRING
  },
  zip_code: {
    type: Datatypes.STRING
  },
  phone_number: {
    type: Datatypes.INTEGER
  },
  business_email: {
    type: Datatypes.STRING
  },
  business_url: {
    type: Datatypes.STRING
  },
  business_fb: {
    type: Datatypes.STRING
  },
  main_contact: {
    type: Datatypes.STRING
  },
  contact_title: {
    type: Datatypes.STRING
  },
  contact_phone: {
    type: Datatypes.STRING
  },
  contact_email: {
    type: Datatypes.STRING
  }
});
return Resources_model;
}
// Resources_model.sync();

// Makes the Resources Model available for other files (will also create a table)
// module.exports = Resources_model;
