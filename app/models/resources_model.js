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
    type: DataTypes.STRING
  },
  business_name: {
    type: DataTypes.STRING,
    unique: true
  },
  business_category: {
    type: DataTypes.STRING
  },
  city_dept: {
    type: DataTypes.STRING
  },
  sub_category1: {
    type: DataTypes.STRING
  },
  sub_category2: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  ethnicity: {
    type: DataTypes.STRING
  },
  ethnicity2: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  business_description: {
    type: DataTypes.TEXT
  },
  street_address: {
    type: DataTypes.STRING
  },
  business_city: {
    type: DataTypes.STRING
  },
  business_state: {
    type: DataTypes.STRING
  },
  zip_code: {
    type: DataTypes.STRING
  },
  phone_number: {
    type: DataTypes.INTEGER
  },
  business_email: {
    type: DataTypes.STRING
  },
  business_url: {
    type: DataTypes.STRING
  },
  business_fb: {
    type: DataTypes.STRING
  },
  main_contact: {
    type: DataTypes.STRING
  },
  contact_title: {
    type: DataTypes.STRING
  },
  contact_phone: {
    type: DataTypes.STRING
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
