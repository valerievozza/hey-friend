const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
require('dotenv').config
// MODELS
// const TodoTask = require('./models/todotask')

app.use(cors())

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// connect mongoose
// mongoose.connect(process.env.DB_CONNECTION,
//     {useNewUrlParser: true},
//     () => console.log('Connected to DB!'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.get('endpoint here', (req, res) => {
    // code
// })

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})

