var express = require('express');
var usersRouter = express.Router();
var user = require ('../controllers/user.controller');


usersRouter.get('/',user.findAll);


module.exports = usersRouter;
