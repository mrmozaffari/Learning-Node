const book = {
  'title':'Ego is the Enemy',
  'author': 'Ryan Holiday'
}
console.log('type of book is ', typeof book)
console.log('book is ',  book)
console.log('type of book.title is ', typeof book.title)
console.log('book.title is ', book.title)
// Convert JSON to String
const bookJsonString = JSON.stringify(book)

console.log('type of bookJsonString is ', typeof bookJsonString)
console.log('bookJsonString is ', bookJsonString)
console.log('bookJsonString is ', bookJsonString.title)
