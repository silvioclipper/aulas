const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


const server = express()

mongoose.connect('mongodb+srv://silvioclipper:Y0k02015@cluster0-7lncu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true
})
server.use(express.json)
server.use(routes)

server.listen(3333, ()=>{
    console.log('teste')
})