import mongoose from "mongoose"

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
  },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true
    }
  }
)

export default mongoose.model('users', usersSchema)