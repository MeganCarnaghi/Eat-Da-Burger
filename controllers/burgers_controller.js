//REQUIRED DEPENDENCIES
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create routes
// GET route to get all burgers from the database
router.get('/', (req, res) => {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render('index', hbsObject);
    });
  });

// POST route to insert a burger into the database
router.post('/burgers', (req, res) => {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], (data) => {
      res.redirect('/');
    });
  });

// PUT route to change a burger's devoured status to true
router.put('/burgers/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, (data) => {
      res.redirect('/');
    });
  });

// Export routes for the server (server.js) to use
module.exports = router;