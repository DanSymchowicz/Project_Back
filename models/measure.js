var Schema = mongoose.Schema;

var measureSchema = {
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
    },
};


module.exports = mongoose.model('Measure', measureSchema);