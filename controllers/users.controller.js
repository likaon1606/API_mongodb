import { generateToken } from "../helpers/authenticate.js"
import usersModel from "../models/users.model.js"
import bcrypt from 'bcrypt'

class usersController {
  constructor() {
  }

  async register(req, res) {
    try {
      const { email, name, phone, password } = req.body
      const userExist = await usersModel.getOne({ email })
      if (userExist) {
        return res.status(400).json({ error: 'User already exists' })
      } 

     const passwordEncripted = await bcrypt.hash(password, 10)

      const data = await usersModel.create({
        email, name, phone, password: passwordEncripted
      })
      res.status(201).json({
        status: 'success',
        message: 'User Created',
        data: data
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body

      const userExist = await usersModel.getOne({ email })
      if (!userExist) {
        return res.status(400).json({ error: 'User not found' })
      }

      const passwordValidate = await bcrypt.compare(password, userExist.password)

      if (!passwordValidate) {
        return res.status(400).json({ error: 'Invalid password' })
      }

      const token = generateToken(email)

      return res.status(200).json({ msg: 'Login success', token})
    } catch (error) {
      console.error(error)
    }
  }
}

export default new usersController()
