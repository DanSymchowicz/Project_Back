var Schema = mongoose.Schema;

var measureSchema = {
    location: {
        type: String,
        required: true
    },
    personsInHouse: {
        type: Number,
        required: true
    },
    houseSize: {
        type: String,
        required: true
    }
};

module.exports = measureSchema;