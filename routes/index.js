var express = require('express');
var router = express.Router();
// var uploadManager = require('./uploadManager')(router);
var title = "Express";
var cmd = require('node-cmd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});



/* GET home page. */
router.get('/patient', function(req, res, next) {
  res.render('patient', { title: title });
});
router.get('/patient/:id', function(req, res, next) {
  res.render('patientDetail', { title: title });
});

router.get('/emp', function(req, res, next) {
  res.render('emp', { title: title });
});
router.get('/emp/:id', function(req, res, next) {
  res.render('patientDetail', { title: title });
});

module.exports = router;
