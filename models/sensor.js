const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema( {
    _Id : {
        type: mongoose.Schema.Types.ObjectId
    },
    creationDate: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},
{collection:"Sensor"});

module.exports = mongoose.model('Sensor', sensorSchema);