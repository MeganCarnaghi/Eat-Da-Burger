//REQUIRED DEPENDENCIES
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create routes
// GET route
router.get('/', (req, res) => {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render('index', hbsObject);
    });
  });

// POST route

// PUT route

// Export routes for the server (server.js) to use
module.exports = router;