const Measure = require('../models/measure');

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
    Measure.find()
  
    .then(measure => {
        res.send(measure);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving measure.'
        }); 
      });
  };
  

  // nombre d'humide
exports.humidity = (req, res) => {
  Measure.find({"type" : "humidity"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// nombre de temperature
exports.temperature = (req, res) => {
  Measure.find({"type" : "temperature"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
// nombre d'airPollution'
exports.airpo = (req, res) => {
  Measure.find({"type" : "airPollution"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

  // Find a single measure with a MeasureId
exports.findOne = (req, res) => {
    Measure.findById(req.params.measureId)
      .then(measure => {
        if (!measure) {
          return res.status(404).send({
            message: 'Measure not found with id ' + req.params.userId
          });
        }
        res.send(measure);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Measure not found with id ' + req.params.userId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving measure with id ' + req.params.userId
        });
      });
  };

  // trouver et comter mes capteur humidity
