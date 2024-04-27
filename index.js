const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const vehicalRoutes = require('./src/routes/vehicals.js')

const app = express()

app.use(bodyParser.urlencoded())
app.use(vehicalRoutes)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

const port =process.env.PORT || 3000;

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Server is up :)'))
    .catch((error) => console.log(error))
})

