var express = require('express');
var measureRouter = express.Router();
var measure = require ('../controllers/measure.controller');

// affichage de tous les sensors
measureRouter.get('/',measure.findAll);

// affichage d'une seule measure a partir de l'ID
measureRouter.get('/woula/:measureId',measure.findOne);

 // affiche la liste des humides
measureRouter.get('/hum',(req, res) => {
    measure.humidity(req, res);
});
measureRouter.get('/temp',(req, res) => {
    measure.temperature(req, res);
});
measureRouter.get('/pollu',(req, res) => {
    measure.airpo(req, res);
});

module.exports = measureRouter;