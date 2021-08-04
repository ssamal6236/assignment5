var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Sovan Samal' });
});

module.exports = router;
