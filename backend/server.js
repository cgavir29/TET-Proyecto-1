const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const signin = require('./routes/signin')
const users = require('./routes/api/users')

const port = process.env.PORT || 3000
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Database Connection
const db = "mongodb+srv://cgavir29:sbmFGM49@data-3vhl7.mongodb.net/test?retryWrites=true&w=majority"
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
app.use('/signin', signin)
app.use('/api/users', users)


app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
