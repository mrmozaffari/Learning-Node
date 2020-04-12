const fs = require('fs')

const book = {
  'title':'bahman',
  'body': 'male'
}
console.log('type of book is ', typeof book)
console.log('book is ',  book)
console.log('type of book.title is ', typeof book.title)
console.log('book.title is ', book.title)

// Convert JSON to String
const bookString = JSON.stringify(book)
console.log('type of bookString is ', typeof bookString)
console.log('bookString is ', bookString)

// Save to file

//fs.writeFileSync('testarray.json', bookString)


// Convert String to json

const bookJson = JSON.parse(bookString)
console.log('type of bookJson is ', typeof bookJson)
console.log('bookJson is ', bookJson)
console.log('bookJson title is ', bookJson.title)

//Read data from  file
const filedatabuffer = fs.readFileSync('testarray.json')

//Convert data to string
const stringdata = filedatabuffer.toString()

//Convert string to JSON
const jsondata = JSON.parse(stringdata)

console.log('jsondata  is ', jsondata)
console.log('jsondata title is ', jsondata.title)
