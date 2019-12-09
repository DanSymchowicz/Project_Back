const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({

    _Id : {
        type: mongoose.Schema.Types.ObjectId
    },
    type: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    },
    sensorID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
},
{collection:"Measure"});


module.exports = mongoose.model('Measure', measureSchema);
