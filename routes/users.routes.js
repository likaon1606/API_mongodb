import express from 'express'
const route = express.Router()
import usersController from '../controllers/users.controller.js'
import { verifyToken } from '../helpers/authenticate.js'

route.post('/register', usersController.register)
route.post('/login', usersController.login)
route.get('/profile', verifyToken, usersController.profile)

export default route