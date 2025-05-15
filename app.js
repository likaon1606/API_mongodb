import 'dotenv/config'
import express from 'express'
import routesMascotas from './routes/mascotas.js'
import bodyParser from 'body-parser'
import dbClient from './config/dbClient.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/mascotas', routesMascotas)

try {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, console.log(`Servidor corriendo en el puerto: ${PORT}`)
  )
} catch (error) {
  console.log(`Falló la conexión al servidor ${error}`)
}

process.on('SIGINT', async () => {
  dbClient.cerrarConexion()
  process.exit(0)
})