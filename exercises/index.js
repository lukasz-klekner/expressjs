const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const browserInfo = req.headers['user-agent']
    res.send(browserInfo)
})

app.listen(3000)

