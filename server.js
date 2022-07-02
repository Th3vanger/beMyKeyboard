const express = require('express')
const bodyParser =require('body-parser')
const morgan =require('morgan')
const cors =require('cors')
require('dotenv').config()
const guideRouter = require('./resources/guide/guide.router')
const app = express()
const mongoose = require('mongoose')

app.disable('x-powered-by')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/guide', guideRouter)
mongoose.connect(process.env.MONGO_DB_URL)
const start = async () => {
  try {
    // await connect()
    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = start
