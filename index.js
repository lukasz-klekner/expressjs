const express = require('express')
const cookieParser = require('cookie-parser')

const { voteRouter } = require('./routes/vote')
const { calcRouter } = require('./routes/calc')
const { cookieRouter } = require('./routes/cookie')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())
app.use('/vote', voteRouter)
app.use('/calc', calcRouter)
app.use('/cookie', cookieRouter)

app.listen(3000, 'localhost')