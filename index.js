require('dotenv').config()
const express = require('express')
const app = express()

//Router
app.use('/places', require('./controllers/places.js'))

//Main Page
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//404
app.get('*', (req, res) => {
    res.status(404).sernd('<h1>404 Page</h1>')
})

//Listen
app.listen(process.env.PORT)