const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
    {
        brand: String,
        model: String,
        registrationNumber: String,
        owner: {type: Schema.Types.ObjectId},
        color: String,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);