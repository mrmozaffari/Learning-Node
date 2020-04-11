const validator = require('validator')
const getnote = require('./notes.js')
const fs = require('fs')
fs.writeFileSync('notes.txt','Hello Im in the file')
try{
  fs.appendFileSync('notes.txt','This is the 2nd')
  console.log('File appended')
} catch (err) {
    console.log('Error')
}

const add = require('./utils.js')
const sum = add(10,20)
console.log('app.js is running')
console.log(sum)
console.log(getnote())
console.log(validator.isEmail('arbab@hpe.com'))
console.log(validator.isIPRange(str: '1.1.1.1-1.1.1.10'))
