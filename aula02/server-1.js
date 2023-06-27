import http from 'http'
import currentDate from './currentDate.js'
import myName from './myName.js'
// const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

    // Logica - ela fica dentro apenas do BE
    const total = (25 + 36) / 2
    const frutas = ['banana', 'laranja', 'uva', 'melão']
    let texto = ''

    frutas.map(f => {
        texto += `<p>${f}</p>`
    })

    res.write(`<h1>Bem vindo ${myName()}</h1>`)
    res.write(`<p>Ola mundo - aula 02 ${currentDate()}!</p><hr/> ${texto}`)
    res.end()
}).listen(3033)


