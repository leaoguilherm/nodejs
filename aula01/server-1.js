import http from 'http'
// const http = require('http')

http.createServer((req, res) => {
    res.end('Hello ddMundo!!!')
}).listen(3033)


