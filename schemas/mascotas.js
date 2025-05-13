import mongoose from "mongoose"

const mascotaSchema = new mongoose.Schema(
  {
    "nombre":{
      type: String,
      required: true
    },
    "tipo":{
      type: String,
      required: true
    },
    "raza":{
      type: String,
      required: true
    },
    "edad": {
      type: Number,
    },
    "descripcion": {
      type: String,
    },
    "adoptado": {
      type: Boolean
    }
  }, { timestamps: true }
)

export default mongoose.model("mascota", mascotaSchema)