const express = require('express')

const routes = express.Router()
const { UserController } = require('./controllers')

routes.get('/', UserController.index)
routes.get('/:id', UserController.show)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.destroy)
routes.post('/', UserController.store)



module.exports = routes;
