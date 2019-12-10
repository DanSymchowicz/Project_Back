var express = require('express');
var sensorRouter = express.Router();
var sensor = require ('../controllers/sensor.controller');

// affichage de tous les sensors
sensorRouter.get('/',sensor.findAll);

// affichage d'un seul sensor a partir de l'ID
sensorRouter.get('/:sensorId',sensor.findOne);

module.exports = sensorRouter;