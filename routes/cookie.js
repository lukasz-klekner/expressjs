const express = require('express')

const cookieRouter = express.Router()

cookieRouter
.post('/set', (req, res) => {
    const { name } = req.body

    res.cookie('name', name, {
        maxAge: 1000* 60 * 60 * 24 * 30
    }).send(name)
})
.get('/show', (req, res) => {
    res.send(req.cookies.name)
})
.get('/check', (req, res) => {
    res.send(
        req.cookies.name ? 'Coookie name exists' : 'No name yet'
    )
})

module.exports = {
    cookieRouter
}