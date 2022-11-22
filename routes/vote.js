const express = require('express')
const { IpRestrict } = require('../utils/ipRestrict')

const voteResults = {}
const ipRestrict = new IpRestrict()

const voteRouter = express.Router()

voteRouter
.get('/check', (req, res) => {
    const info = Object.entries(voteResults).map(([voteName, voteCounter]) =>`
        <p>${voteName} --- ${voteCounter}</p>
    `).join('')

    res.send(info)

})
.get('/:voteOption', (req, res) => {
    const { ip } = req
    const { voteOption } = req.params

    if(!ipRestrict.check(ip)) {
        res.send('Nie możesz już glosować! Już to zrobiłeś!')
    } else {
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