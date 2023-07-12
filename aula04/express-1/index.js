import express from 'express'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    const dia = 'Terça'
    res.send(`Bem Vindo! - ${dia}!`)
})

app.post('/', (req, res) => res.send('Recebi um POST'))

app.get('/Clientes', (req, res) => res.send('Clientes'))


app.get('/users/:usuario/repos', (req, res) => {
    console.log(req.params)
    res.send('Funciona!')
  })


// LEVANTA O SERVIDOR HTTP
app.listen(3033, () => console.log('Executando servidor web...'))