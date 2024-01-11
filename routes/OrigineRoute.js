const express = require('express')
const routes = express.Router()
const { getOgirines, storeOrigine, updateOrigine, deleteOrigine } = require('../controllers/origineController')

routes.get('/', getOgirines)
routes.post('/', storeOrigine)
routes.put('/:id', updateOrigine)
routes.delete('/:id', deleteOrigine)

module.exports = routes