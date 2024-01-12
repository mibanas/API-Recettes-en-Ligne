const express = require('express')
const routes = express.Router()

const { storePlat, getPlats, deletePlat, updateplat, getOnePlat, platByOrigine } = require('../controllers/platController')

routes.get('/', getPlats)
routes.get('/:id', getOnePlat)
routes.get('/origine/:origineName', platByOrigine)
routes.post('/', storePlat)
routes.delete('/:id', deletePlat)
routes.put('/:id', updateplat)

module.exports = routes