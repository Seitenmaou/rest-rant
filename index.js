require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Router
app.use('/places', require('./controllers/places.js'))

//Main Page
app.get('/', (req, res) => {
    res.render('home')
})

//404
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//Listen
app.listen(process.env.PORT)