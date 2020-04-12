const fs = require('fs')
const getNotes = function() {
  return "These are my notes"
}

const addNotes = function(title, body) {
  const notes = loadNotes()
  console.log(notes)
  notes.push({
    title: title,
    body: body
  })
  console.log(notes)

}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

//module.exports = getNotes

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
