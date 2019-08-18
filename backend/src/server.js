const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://silvioclipper:Y0k02015@cluster0-7lncu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true
})
server.use(express.json)
server.use(routes)

//server.set('port', process.env.PORT || 3333)

server.listen(3333, ()=>{
    console.log('Servidor rodando . . .')
})