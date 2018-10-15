const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageModel = new Schema(
    {
        description: String,
        owner: {type: Schema.Types.ObjectId, ref: 'User'},
        receiver: {type: Schema.Types.ObjectId, ref: 'User'},
        carrier: {type: Schema.Types.ObjectId, ref: 'User'},
        size: Number,
        weight: Number,
        identifier: String,
        route: {type: Schema.Types.ObjectId, ref: 'Route'}
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model('Package', packageModel)