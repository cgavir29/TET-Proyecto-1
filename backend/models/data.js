const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    humidity: {
        type: Number,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = DataSchema

