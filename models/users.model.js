import mongoose from 'mongoose'
import User from '../schemas/users.schemas.js' 

class usersModel {
  async create(user) {
    return await User.create(user)
  }

  async update(id, user) {
    return await User.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, user, {
      new: true,user
      // runValidators: true
    })
  }

  async delete(id) {
    return await User.findByIdAndDelete(id)
  }

  async getAll() {
    return await User.find()
  }

  async getOneById(id) {
    return await User.findById(id)
  }

    async getOne(filter) {
    return await User.findOne(filter)
  }
}

export default new usersModel()
