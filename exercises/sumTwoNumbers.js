const express = require('express')

const app = express()

app.get('/:a/:b', (req,res) => {
    const {a: firstNum, b: secondNum} = req.params
    const result = Number(firstNum) + Number(secondNum)
    res.send(`result: ${result}`)
})

app.listen(3000)