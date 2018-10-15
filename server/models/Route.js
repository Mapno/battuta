const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema(
    {
        departureTime: Date,
        driver: { type: Schema.Types.ObjectId, ref: 'User' },
        departure: {
            location: {
                type: { type: String },
                coordinates: [{ type: Number }]
            },
            name: String
        },
        arrival: {
            location: {
                type: { type: String },
                coordinates: [{ type: Number }]
            },
            name: String
        },
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

routeSchema.index({ "departure.location": "2dsphere" })
routeSchema.index({ "arrival.location": "2dsphere" })

module.exports = mongoose.model('Route', routeSchema);