const Sensor = require('../models/sensor');


// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
    Sensor.find()
      .then(sensor => {
        res.send(sensor);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving sensor.'
        });
      });
  };

  // Find a single sensor with a SensorId
exports.findOne = (req, res) => {
    Sensor.findById(req.params.sensorId)
      .then(sensor => {
        if (!sensor) {
          return res.status(404).send({
            message: 'Sensor not found with id ' + req.params.userId
          });
        }
        res.send(sensor);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Sensor not found with id ' + req.params.userId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving sensor with id ' + req.params.userId
        });
      });
  };

  // nombre de capteur dans la livingroom
exports.livingroom = (req, res) => {
  Sensor.find({"location" : "livingroom"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
    // nombre de capteur dans la bathroom
exports.bathroom = (req, res) => {
  Sensor.find({"location" : "bathroom"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
    // nombre de capteur dans la bedroom
exports.bedroom = (req, res) => {
  Sensor.find({"location" : "bedroom"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
    // nombre de capteur dans la entrance
exports.entrance = (req, res) => {
  Sensor.find({"location" : "entrance"}).count()
    .then(measure => {
      res.status(200).json({measure});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};