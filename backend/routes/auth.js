const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = express.Router()

// User Model
const User = require('../models/user')

// @route   GET /signin
// @desc    Get user data
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        const token = jwt.sign({ id: user._id.toString() }, config.get('jwtSecret'))

        res.status(200).json({ token: token })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router