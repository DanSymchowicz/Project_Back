var Schema = mongoose.Schema;

var userSchema = {
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

module.exports = userSchema;