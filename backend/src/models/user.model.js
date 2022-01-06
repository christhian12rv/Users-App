const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("users", User);