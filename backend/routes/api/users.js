const express = require('express')
const verifyToken = require('../../middleware/auth')

const router = express.Router()

// User Model
const User = require('../../models/user')

// @route   POST api/users
// @desc    Create a user
// @access  Public
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).send(err))
})

// @route   GET api/users
// @desc    Get a user
// @access  Private
router.get('/', verifyToken, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
        .catch(err => send.status(500).send(err))
})

// @route   DELETE api/users
// @desc    Delete a user
// @access  Private
router.delete('/', verifyToken, (req, res) => {
    User.findByIdAndDelete(req.user.id, (err, user) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send('User successfully deleted')
    })
})

// @route POST api/users/data
// @desc Add temp, humi and location data
// @access Private
router.post('/data', verifyToken, (req, res) => {
    User.findByIdAndUpdate(req.user.id, {
        $push: { 'data': req.body }
    }, { new: true }, (err, user) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(user)
    })
})

module.exports = router
