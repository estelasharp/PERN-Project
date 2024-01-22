const express = require('express')
const app = express()
const PORT = 8080

const client = require('./dataBase/client')
client.connect()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', require('./api'))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
