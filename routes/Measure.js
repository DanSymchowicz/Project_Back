var express = require('express');
var measureRouter = express.Router();
var measure = require ('../controllers/measure.controller');

// affichage de tous les sensors
measureRouter.get('/',measure.findAll);

// affichage d'une seule measure a partir de l'ID
measureRouter.get('/:measureId',measure.findOne);

module.exports = measureRouter;