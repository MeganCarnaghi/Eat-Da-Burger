// Required Dependencies
const mysql = require("mysql");

// Set up the MySQL database connection
var connection = mysql.createConnection({
  host: "localhost",
    port: 3306,
    user: "root",
    password: "GusSaysWoof!!",
    database: "burgers_db",
});

//Initiate MySQL connection & Console Log to let us know if it's connected
connection.connect((err) => {
  if (err) {
    console.error(`ERROR: MySQL connection error --  ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL database as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;