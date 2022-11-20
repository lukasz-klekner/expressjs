const express = require('express')

const app = express()
let NAME = ''

app.get('/name/show', (req,res) => {
    res.send(`Name: ${NAME}`)
})

app.get('/name/check', (req,res) => {
    res.send(`Name: ${NAME ? 'TAK' : 'NIE'}`)
})

app.get('/name/set/:name', (req,res) => {
    const { name } = req.params
    NAME = name
    res.send(`Name: ${NAME}`)
})

app.listen(3000)