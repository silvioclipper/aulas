const express = require('express')
const {store} = require('./controlles/DevController')

const routes = express.Router()

routes.post('/devs', store)

module.exports = routes