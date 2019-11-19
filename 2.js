const fs = require('fs')
const http = require('http')
// 请先引入 fs 和 http
const server = http.createServer()
server.on('request', (request, response) => {
  fs.readFile('./big_file.txt', (error, data) => {
    if (error) throw error
    response.end(data)
    console.log('done')
  })
})
server.listen(8888)
console.log('8888')
