const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "vacCenter",
});

module.exports = connection;
