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

//Convert string to json
const bookJson = JSON.parse(bookJsonString)
console.log(bookJson)
