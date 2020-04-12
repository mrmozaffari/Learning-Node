const fs = require('fs')

const getNotes = function() {
  return "These are my notes"
}

const addNotes = function(title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    console.log(note.title === title)
    console.log(note)
    return note.title === title
  })

  console.log('array length: ', duplicateNotes.length)
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
  } else {
    console.log('This is duplicate title: ' + title)
  }
}

const loadNotes = function() {
  try {
    //const dataBuffer = fs.readFileSync('notes.json')
    //const dataJSON = dataBuffer.toString()
    //const fff = JSON.parse(dataJSON)
    //return fff
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    const outjson = JSON.parse(dataJSON)
    return outjson
  } catch (e) {
    return []
  }
}
//
const saveNotes = function(notes) {
  const dataToSave = JSON.stringify(notes)
  const testparse = JSON.parse(dataToSave)
  fs.writeFileSync('notes.json', dataToSave)

}


//module.exports = getNotes

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
