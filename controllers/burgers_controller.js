// REQUIRED DEPENDENCIES
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

// Create routes and set up the logic where needed within routes
// GET route to get all burgers from the database
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
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

// A PUT route to update a burger's devoured status
router.put('/burgers/:id', (req, res) => {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, (data) => {
    res.redirect('/');
  });
});

  // // A DELETE route to delete a burger that has been devoured
  // router.delete("/burgers/:id", (req, res) => {
  //   var condition = "id = " + req.params.id;
  
  //   burger.delete(condition, (data) => {
  //     res.redirect('/');
  //   });
  // });

  router.delete("/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, (data) => {
      res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;













