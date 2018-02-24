// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
/*var Resources_model = sequelize.define("resources_table", {
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
*/


//Creat a "business_category" model that matches up with DB
var category_model = sequelize.define("business_category", {
  username: {
    type: Sequelize.STRING
  },
  business_name: {
    type: Sequelize.STRING
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
  /*sub_category2: {
    type: Sequelize.STRING
  },
  sub_category3: {
    type: Sequelize.STRING
  },
  sub_category4: {
    type: Sequelize.STRING
  },*/
  ethnicity: {
    type: Sequelize.STRING
  },
  ethnicity2: {
    type: Sequelize.STRING
    defaultValue: null
  },
  /*ethnicity3: {
    type: Sequelize.STRING
  }*/
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

category_model.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Resources_model;
