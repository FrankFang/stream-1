const fs = require('fs')
const stream = require('stream')
const events = require('events')

const s = fs.createReadStream('./big_file.txt')

console.log(events.EventEmitter.prototype)
