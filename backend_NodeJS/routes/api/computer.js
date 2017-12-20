var router = require('express').Router();
var mongoose = require('mongoose');
var Computer = mongoose.model('Computer');

console.log('Computer');
// return a list of tags
router.get('/', function(req, res, next) {
  console.log(Computer.find());
  Computer.find().then(function(computer){
    return res.json({computer: computer});
  }).catch(next);
});

module.exports = router;
