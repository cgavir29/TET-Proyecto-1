const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

// Data Model
// const Data = mongoose.model('Data', require('../../models/user'))

// @route   POST api/users/:id/data
// @desc    Adds data to the user
// @access  Private
router.post('/', (req, res) => {
    // Find user first
    // Data.create({
    //     temperature: req.body.temperature,
    //     humidity: req.body.humidity,
    //     location: req.body.location
    // })
    //     .then(data => res.status(201).json(user))
    //     .catch(err => res.status(500).send(err))
})