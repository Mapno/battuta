const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema(
    {
        departureTime: Date,
        driver: {type: Schema.Types.ObjectId, ref: 'User'},
        departure: {},
        arrival: {},
        stops: [{ type: { type: String }, coordinates: [Number] }],
        aviableSpace: Number,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model('Route', routeSchema);