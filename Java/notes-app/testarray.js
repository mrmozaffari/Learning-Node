const book = {
  'title':'Ego is the Enemy',
  'author': 'Ryan Holiday'
}
console.log('type of book is ', typeof book)
console.log('book is ',  book)
console.log('type of book.title is ', typeof book.title)
console.log('book.title is ', book.title)

// Convert JSON to String
const bookString = JSON.stringify(book)
console.log('type of bookString is ', typeof bookString)
console.log('bookString is ', bookString)

// Convert String to json

const bookJson = JSON.parse(bookString)
console.log('type of bookJson is ', typeof bookJson)
console.log('bookJson is ', bookJson)
console.log('bookJson title is ', bookJson.title)
