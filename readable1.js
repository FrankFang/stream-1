const {Readable} = require('stream')

const inStream = new Readable()

inStream.push('ABCDEFGHIJKLM')
inStream.push('NOPQRSTUVWXYZ')

inStream.push(null) // No more data

inStream.on('data', (chunk)=>{
  process.stdout.write(chunk)
  console.log('写数据了')
})
