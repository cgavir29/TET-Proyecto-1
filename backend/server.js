const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')

const auth = require('./routes/auth')
const users = require('./routes/api/users')

const port = process.env.PORT || 3000
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Database Connection
const db = config.get('mongoURI')
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err))

// Routes
app.use('/signin', auth)
app.use('/api/users', users)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
