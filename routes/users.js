var express = require('express');
var usersRouter = express.Router();
var user = require ('../controllers/user.controller');

// affichage de tous les users
usersRouter.get('/',user.findAll);

// affichage d'un seul user
usersRouter.get('/get/:userId',user.findOne);

// creation d'un user
usersRouter.put('/add', user.create);

//suppression d'un user avec l'ID
usersRouter.delete('/del/:userId', user.delete);

// affiche le nombre de big
usersRouter.get('/big',(req, res) => {
    user.big(req, res);
});
// affiche le nombre de small
usersRouter.get('/small',(req, res) => {
    user.small(req, res);
});
// affiche le nombre de medium
usersRouter.get('/medium',(req, res) => {
    user.medium(req, res);
});
module.exports = usersRouter;
