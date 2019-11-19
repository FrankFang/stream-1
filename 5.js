const fs = require('fs')

function writeOneMillionTimes(writer, data) {
  let i = 1000000
  write()

  function write() {
    let ok = true
    do {
      i--
      if (i === 0) {
        // Last time!
        writer.write(data)
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data)
        if (ok === false) {
          console.log('不能再写了')
        }
      }
    } while (i > 0 && ok)
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', () => {
        console.log('干涸了')
        write()
      })
    }
  }
}

const writer = fs.createWriteStream('./big_file.txt')
writeOneMillionTimes(writer, 'hello world')