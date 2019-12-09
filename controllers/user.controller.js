const User = require('../models/users');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    console.log("xfhgdfu");
    User.find()
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  };