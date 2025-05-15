import mongoose from "mongoose"

const mascotaSchema = new mongoose.Schema(
  {
    "nombre":{
      type: String,
      required: true
    },
    "tipo":{
      type: String,
      required: true,
      enum: {
        values: [ "perro", "gato", "conejo"],
        message: `{VALUE} no es un tipo de mascota permitido`}, 
    },
    "raza":{
      type: String,
    },
    "edad": {
      type: Number,
      min: [
        0, "La edad no puede ser menor a 0 años"
      ],
      max: [
        30, "La edad no puede ser mayor a 30 años"
      ],
    },
    "descripcion": {
      type: String,
    },
    "adoptado": {
      type: Boolean,
      default: false,
    }
  }, { timestamps: true }
)

export default mongoose.model("mascota", mascotaSchema)