var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Bienvenue BG');
});

module.exports = router;