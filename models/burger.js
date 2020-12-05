//REQUIRED DEPENDENCIES
// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
    // Select all burger records from the database
    selectAll: (cb) => {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    // The variables cols and vals are arrays
    insertOne: (cols, vals, cb) => {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne('burgers', objColVals, condition, (res) => {
        cb(res);
      });
    },

    // Delete
    deleteOne: (condition, cb) => {
      orm.deleteOne("burgers", condition, (res) => {
        cb(res);
      });
    }
  };

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;