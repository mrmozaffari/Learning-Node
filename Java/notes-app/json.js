const fs = require('fs')
const book = {
  'title':'Ego is the Enemy',
  'author': 'Ryan Holiday'
}
// Print object from json
console.log(book)
console.log(book.title)
// Convert JSON to String
const bookJsonString = JSON.stringify(book)
console.log(bookJsonString)
fs.writeFileSync('myjson.json',bookJsonString) //save json string to file


//Convert string to json
const bookJson = JSON.parse(bookJsonString)
console.log(bookJson)

const databuffer = fs.readFileSync('myjson.json')
console.log(databuffer)
console.log('These bit will turn into human readable data with databuffer.toString')
console.log(databuffer.toString())
//conver databuffer string to JSON
const convertedToJson = JSON.parse(databuffer.toString())
console.log(convertedToJson)
