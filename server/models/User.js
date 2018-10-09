const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const userSchema = new Schema(
    {
        name: String,
        password: String,
        email: { type: mongoose.SchemaTypes.Email },
        role: [{ type: String, enum: ["client", "carrier", "admin"] }],
        vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle" }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model('User', userSchema);