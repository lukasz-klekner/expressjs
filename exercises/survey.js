const express = require('express')

const app = express()
let YES = 0
let NO = 0
let votedPeople = []

app.get('/vote/yes', (req, res) => {
    const { ip } = req

    if(votedPeople.includes(ip)) {
        res.send('Nie możesz już glosować! Już to zrobiłeś!')
    } else {
    votedPeople.push(ip)
    YES++;
    res.send('Dziękujemy za oddany głos!')
    }
})

app.get('/vote/no', (req, res) => {
    const { ip } = req
    if(votedPeople.includes(ip)) {
        res.send('Nie możesz już glosować! Już to zrobiłeś!')
    } else {
    votedPeople.push(ip)
    NO++;
    res.send('Dziękujemy za oddany głos!')
    }
})

app.get('/vote/check', (req, res) => {
    res.send(`
        Wyniki ankiety:
        - YES -- ${YES}
        - NO -- ${NO}
    `)

})

app.listen(3000)