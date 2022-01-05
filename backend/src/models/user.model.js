const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        min: 2,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("users", User);