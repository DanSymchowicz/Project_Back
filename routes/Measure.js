var express = require('express');
var measureRouter = express.Router();
var measure = require ('../controllers/measure.controller');

// affichage de tous les sensors
measureRouter.get('/',measure.findAll);


// affichage d'une seule measure a partir de l'ID
measureRouter.get('/woula/:measureId',measure.findOne);

 //pourcentage humidity
measureRouter.get('/hum',(req, res) => {
    measure.humidity(req, res);
});
 //pourcentage temperature
measureRouter.get('/temp',(req, res) => {
    measure.temperature(req, res);
});
//pourcentage pollution de l'air
measureRouter.get('/pollu',(req, res) => {
    measure.airpo(req, res);
});

// affiche la moyenne des temperature
measureRouter.get('/tempo',(req, res) => {
    measure.moyenneTemperature(req, res);
});
// affiche toutes les mesures d'humidity
measureRouter.get('/humidi',(req, res) => {
    measure.moyenneHumidity(req, res);
});
// affiche toutes les valeurs des mesures de pollution dans l'air
measureRouter.get('/polluda',(req, res) => {
    measure.moyenneAirPo(req, res);
});


module.exports = measureRouter;