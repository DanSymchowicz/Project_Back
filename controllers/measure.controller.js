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


  // pourcentage humidity
exports.humidity = (req, res) => {
  Measure.find({"type" : "humidity"}).count()
    .then(measure => {
      let prct =0;
      prct=measure/10;
      res.status(200).json({prct});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// pourcentage temperature
exports.temperature = (req, res) => {
  Measure.find({"type" : "temperature"}).count()
    .then(measure => {
      let prct =0;
      prct=measure/10;
      res.status(200).json({prct});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
// pourcentage d'airPollution'
exports.airpo = (req, res) => {
  Measure.find({"type" : "airPollution"}).count()
    .then(measure => {
      let prct =0;
      prct=measure/10;
      res.status(200).json({prct});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// moyenne temperature
exports.moyenneTemperature = (req, res) => {
  Measure.find({"type" : "temperature"},{"value":1,"_id":0})
    .then(measure => {
      let cpt=0;
    measure.forEach(element => {
              cpt+= element.value;
      });
      const nbv=cpt/measure.length;
      res.status(200).json({nbv});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// moyenne humidity
exports.moyenneHumidity = (req, res) => {
  Measure.find({"type" : "humidity"},{"value":1,"_id":0})
    .then(measure => {
      let cpt=0;
    measure.forEach(element => {
              cpt+= element.value;
      });
      const nbv=cpt/measure.length;
      res.status(200).json({nbv});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// moyenne pollution air
exports.moyenneAirPo = (req, res) => {
  Measure.find({"type" : "airPollution"},{"value":1,"_id":0})
    .then(measure => {
      let cpt=0;
    measure.forEach(element => {
              cpt+= element.value;
      });
      const nbv=cpt/measure.length;
      res.status(200).json({nbv});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// Valeurs des humidity
exports.valHumidity = (req, res) => {
  Measure.find({"type" : "humidity"},{"value":1,"_id":0})
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};

// Valeurs des pollu
exports.valPollu = (req, res) => {
  Measure.find({"type" : "airPollution"},{"value":1,"_id":0})
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
