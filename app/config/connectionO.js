// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require ("mysql");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("aarc_db", "root", "root", {
  host: "localhost",
  port: "8889",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})


// Exports the connection for other files to use
module.exports = sequelize;
