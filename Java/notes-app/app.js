const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
//import validator from 'validator'
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
console.log(validator.isIPRange('1.1.1.0/24'))
console.log(chalk.hex('#DEADED').underline('Hello, world!'))
console.log(chalk.bold.keyword('orange')('Some orange text'))
console.log(chalk.keyword('orange')('Some orange text'))
console.log(chalk.bgHex('#DEADED').underline('Hello, world!'))
console.log(chalk.bgKeyword('orange')('Some orange text'))
console.log(chalk.bgRgb(15, 100, 204).inverse('Hello!'))
yargs.version("1.1.0")
yargs.command({
  command: 'add',
  describe: 'Adding entry to the list',
  builder: {
    title: {
      describe: 'Adding Title'
    }
  },
  handler: function() {
    console.log('add executed')
  }
})
console.log(yargs.argv)
