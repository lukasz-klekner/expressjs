const express = require('express')
const { readFile, writeFile } = require('fs').promises


const app = express()
let NAME = ''

app.get('/name/show', async (req,res) => {
    res.send(`Name: ${await readFile('name.txt', 'utf-8')}`)
})

app.get('/name/check', async (req,res) => {
    try {
        await readFile('name.txt', 'utf-8')
        res.send('There is a name')
    } catch(e) {
        res.send('There is no name')
    }
})

app.get('/name/set/:name', async (req,res) => {
    const { name } = req.params
    NAME = name
    await writeFile('./name.txt', NAME, 'utf-8')
    res.send(`Name: ${NAME}`)
})

app.listen(3000)