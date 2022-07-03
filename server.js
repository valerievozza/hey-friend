const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.get('endpoint here', (req, res) => {
    // code
// })

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})