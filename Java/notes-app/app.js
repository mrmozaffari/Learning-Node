const fs = require('fs')
fs.writeFileSync('notes.txt','Hello Im in the file')
try{
  fs.appendFileSync('notes.txt','This is the 2nd')
  console.log('File appended')
} catch (err) {
    console.log('Error')
}

const firstname = require('./utils.js')
console.log('app.js is running')
