const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const rota = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://silvioclipper:Y0k02015@cluster0-7lncu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true
})
server.use(express.json())
server.use(cors())
server.use(rota)

//server.set('port', process.env.PORT || 3333)

server.listen(3333, ()=>{
    console.log('Servidor rodando . . .')
})