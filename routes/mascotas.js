import express from 'express'
const route = express.Router()
import mascotaController from '../controllers/mascotas.js'
import { verifyToken } from '../helpers/authenticate.js'

route.post('/', mascotaController.create)
route.get('/', mascotaController.getAll)
route.get('/:id', mascotaController.getOne)
route.put('/:id', verifyToken, mascotaController.update)
route.delete('/:id', verifyToken, mascotaController.delete)

export default route