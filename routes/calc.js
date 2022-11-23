const express = require('express')

const calcRouter = express.Router()

calcRouter
.post('/check', (req, res) => {
    const { firstNumber, secondNumber } = req.body

    const divider = firstNumber % secondNumber == 0
    res.json({ divider})
})

module.exports = {
    calcRouter
}