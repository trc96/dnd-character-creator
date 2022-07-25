const express = require('express')
const cors = require('cors')

const { getRaces, getClasses } = require('./controllers/raceController')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/races', getRaces)
app.get('/api/classes', getClasses)

app.listen(3000, () => console.log('Server up on 3000'))