// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");


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

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "aarc_db"
  });
}

// Exports the connection for other files to use
module.exports = sequelize;
