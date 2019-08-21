const express = require('express')
const DevController = require('./controlles/DevController')
const DisLikeController = require('./controlles/DislikeController')
const LikeController = require('./controlles/LikeController')

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DisLikeController.store)

module.exports = routes