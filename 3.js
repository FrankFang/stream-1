const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
  const stream =
    fs.createReadStream('./big_file.txt')
  stream.pipe(response)
  stream.pause()
  setTimeout(()=>{
    stream.resume()
  },3000)

})

server.listen(8888)
