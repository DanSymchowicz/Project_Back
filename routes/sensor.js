var express = require('express');
var sensorRouter = express.Router();
var sensor = require ('../controllers/sensor.controller');

// affichage de tous les sensors
sensorRouter.get('/',sensor.findAll);

// affichage d'un seul sensor a partir de l'ID
sensorRouter.get('/Recherche/:sensorId',sensor.findOne);

// affiche toutes les mesures d'humidity
sensorRouter.get('/liv',(req, res) => {
    sensor.livingroom(req, res);
});

// affiche toutes les mesures d'humidity
sensorRouter.get('/bath',(req, res) => {
    sensor.bathroom(req, res);
});
// affiche toutes les mesures d'humidity
sensorRouter.get('/bed',(req, res) => {
    sensor.bedroom(req, res);
});
// affiche toutes les mesures d'humidity
sensorRouter.get('/entr',(req, res) => {
    sensor.entrance(req, res);
});
module.exports = sensorRouter;