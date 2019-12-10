const User = require('../models/users');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
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

  // Find a single User with a UserId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        res.send(user);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'User not found with id ' + req.params.userId
          });
        }
        return res.status(500).send({
          message: 'Error retrieving user with id ' + req.params.userId
        });
      });
  };

  // Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.location) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'problemossss'
    });
  }

  // Create a new User
  const user = new User({
    location: req.body.location,
    personsInHouse: req.body.personsInHouse || '',
    houseSize: req.body.houseSize || '',
  });

  // Save User in the database
  user
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.userId
      });
    });
};

// nombre big parmis les users
exports.big = (req, res) => {
  User.find({"houseSize" : "big"}).count()
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};
// nombre small parmis les users
exports.small = (req, res) => {
  User.find({"houseSize" : "small"}).count()
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};// nombre medium parmis les users
exports.medium = (req, res) => {
  User.find({"houseSize" : "medium"}).count()
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measure.'
      }); 
    });
};