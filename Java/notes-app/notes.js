const fs = require('fs')
const getNotes = function() {
  return "These are my notes"
}

const addNotes = function(title, body) {
  const notes = loadNotes()

  const duplicateNotes = notes.filter(function(note){
    console.log(notes.title === title)
    return notes.title === title
  })
  console.log('duplicate value: '+duplicateNotes)
  console.log(duplicateNotes.length)
  console.log('***********')


  if(duplicateNotes.length===0){
    console.log(notes)
    notes.push({
      title: title,
      body: body
    })
    console.log(notes)
    saveNotes(notes)
  }else {
    console.log('This is duplicate title: '+title)
  }
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

const saveNotes = function(notes){
  const dataToSave = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataToSave)

}


//module.exports = getNotes

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
