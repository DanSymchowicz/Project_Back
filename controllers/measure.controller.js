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