import http from 'http'
import { read, readFile } from 'fs'

http.createServer((req, res) => {
    const { url } = req
    const file = url === '/' ? 'index.html' : `${url.replace('/', '')}.html`

    readFile(file, 'utf-8', (error, data) => {

        if (!error) {
            res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8' })
            res.write(data)

        }   else {
            res.writeHead(404, { 'Content-type' : 'text/html; charset=utf-8' })
            res.write('Not found!')
        }
        res.end()

    })


}).listen(3000)