const express = require('express')
const { voteRouter } = require('./routes/vote')
const { calcRouter } = require('./routes/calc')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use('/vote', voteRouter)
app.use('/calc', calcRouter)

app.listen(3000, 'localhost')