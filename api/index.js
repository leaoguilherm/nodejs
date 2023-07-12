import express from 'express'
import departamentosRoutes from './src/routes/departamentosRoutes.js'

const app = express()

departamentosRoutes(app)

app.get('/', (req, res) => {
  res.send('Welcome to API')
})

app.listen(80, () => {
  console.log('Servidor sendo executado...')
})