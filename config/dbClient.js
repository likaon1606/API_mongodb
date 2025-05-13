import 'dotenv/config'
import { MongoClient } from "mongodb"
import mongoose, { connect } from 'mongoose'

class dbClient {
  constructor() {
    this.conectarBaseDatos() 
  }
  async conectarBaseDatos(){
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adopcion`
    await mongoose.connect(queryString)
  }

  async cerrarConexion(){
    try {
      await mongoose.disconnect()
      console.log('Conexión a la BD cerrada')
    } catch (error) {
      console.error("Error al cerrar la conexión a la BD", error)
    }
  }
}

export default new dbClient()