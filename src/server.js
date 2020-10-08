const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const server = express()

mongoose.connect(
  "mongodb+srv://unifeso:unifeso-password@unifeso.kwuxv.gcp.mongodb.net/unifeso-financial-control?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

server.use(express.json())
server.use(routes)

server.listen(3333, () => console.log(`application started in http://localhost:3333`))
