const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3001

const { createCharacter, getCharacters } = require('./controllers/raceController')

//Middleware
const app = express()
app.use(express.json())
app.use(cors())

//Endpoints
app.post('/api/createCharacter', createCharacter)
app.get('/api/characters', getCharacters)

app.listen(PORT, () => console.log(`Server up on port ${PORT}`))