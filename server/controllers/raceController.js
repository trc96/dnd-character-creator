// const races = require('../races.json')
// const classes = require('../classes.json')

// const store = require('../../src/redux/store.js')

const characters = []


module.exports = {

    createCharacter: async (req, res) => {
        const character = req.body
        characters.push(character)
        res.status(200).send(characters)
    },

    getCharacters: async (req, res) => {
        res.status(200).send(characters)
    }
}