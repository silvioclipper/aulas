const express = require('express')
const routes = express.Router()

const DevController = require('./controlles/DevController')

routes.get('/', (req, res)=> {
    return res.send(`Helloooo ${req.query.name}`)
})

routes.post('/devs', DevController.store)

module.exports = routes