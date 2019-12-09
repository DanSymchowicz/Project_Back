var Schema = mongoose.Schema;

var sensorSchema = {
    creationDate: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    }
};

module.exports = sensorSchema;