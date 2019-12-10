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