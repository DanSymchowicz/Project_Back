var express = require('express');
var sensorRouter = express.Router();
var sensor = require ('../controllers/sensor.controller');

// affichage de tous les sensors
sensorRouter.get('/',sensor.findAll);


module.exports = sensorRouter;