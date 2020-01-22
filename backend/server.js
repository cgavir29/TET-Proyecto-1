const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const data = require('./routes/data')

const port = process.env.PORT || 3000
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())


// Routes
// app.use('/api/data')

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
