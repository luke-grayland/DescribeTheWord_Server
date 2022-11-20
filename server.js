const express = require('express')
const Routes = require('./Config/Routes')

const server = express()
server.use(express.urlencoded({extended: true}))
Routes(server)

module.exports = server


