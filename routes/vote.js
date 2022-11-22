const express = require('express')

const voteResults = {}
let votedPeople = []

const voteRouter = express.Router()

voteRouter
.get('/check', (req, res) => {
    const info = Object.entries(voteResults).map(([voteName, voteCounter]) =>`
        <p>${voteName} --- ${voteCounter}</p>
    `).join('')

    console.log(info)

    res.send(info)

})
.get('/:voteOption', (req, res) => {
    const { ip } = req
    const { voteOption } = req.params

    if(votedPeople.includes(ip)) {
        res.send('Nie możesz już glosować! Już to zrobiłeś!')
    } else {
    votedPeople.push(ip)
    if(typeof voteResults[voteOption] === 'undefined'){
        voteResults[voteOption] = 0
    }
    voteResults[voteOption]++

    res.send('Dziękujemy za oddany głos!')
    }
})

module.exports = {
    voteRouter
}