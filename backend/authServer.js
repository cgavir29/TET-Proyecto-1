require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
app.use(bodyParser.json())

let refreshTokens = []

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshTokens, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken(user)
        res.json({ accessToken: accessToken })
    })
})

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

app.post('/login', (req, res) => {
    // Authenticate User

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET)
    res.json({ accessToken: accessToken, refreshToken: refreshToken})
})

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)

        // Mongoose object is not "serializable" -> must parse to json
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken: accessToken })
    } catch (error) {
        res.status(400).send(error)
    }
})

// Token Format
// Authorization: Bearer <Access_Token>
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    // If we have an authHeader return the latter otherwise undefined
    const token = authHeader && authHeader.split(' ')[1]
    if (token == nul) return

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // Token not valid -> No access
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

function generateAccessToken(user) {
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
}

app.listen(4000)