const express = require('express')
const cors = require('cors')
const PORT = 8080
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')

const app = express()

// BODY PARSER
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// MODELS
const Rant = require('./models/rant')

app.use(cors())

// LOGGING
app.use(morgan('dev'))

// set middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// connect mongoose
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to DB!'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Routes
app.post('/', (req, res) => {
    const rant = new Rant ({
        content: req.body.content
    })
    console.error(rant)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})

