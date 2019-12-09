var express = require('express');
var usersRouter = express.Router();
var user = require ('../controllers/user.controller');

// affichage de tous les users
usersRouter.get('/',user.findAll);

// affichage d'un seul user
usersRouter.get('/:userId',user.findOne);

// creation d'un user
usersRouter.put('/add', user.create);

//suppression d'un user avec l'ID
usersRouter.delete('/:userId', user.delete);

module.exports = usersRouter;
