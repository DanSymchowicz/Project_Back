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