const fs = require('fs')
fs.writeFileSync('notes.txt','Hello Im in the file')
try{
  fs.appendFileSync('notes.txt','This is the 2nd')
  console.log('File appended')
} catch (err) {
    console.log('Error')
}

const add = require('./utils.js')
sum = add(10,20)
console.log('app.js is running')
console.log(sum)
