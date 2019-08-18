const express = require('express')

const routes = express.Router()

routes.get('/', (req, res)=> {
    return res.send(`Helloooo ${req.query.name}`)
})

routes.post('/devs', (req,res) =>{
    return res.send({ok:true})
})

module.exports = routes