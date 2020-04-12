const fs = require('fs')
const getNotes = function() {
  return "These are my notes"
}

const addNotes = function(title, body) {
  const notes = loadNotes()

  const duplicateNotes = notes.filter(function(note){
    return notes.title === title
  })


  if(duplicateNotes.length===0){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
  }else {
    console.log('This is duplicate title: '+title)
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSONstring = dataBuffer.toString()
    const datajson = JSON.parse(dataJSONstring)
    console.log(datajson.title)
    return dataJson
  } catch (e) {
    return []
  }
}
//
const saveNotes = function(notes){
  const dataToSave = JSON.stringify(notes)
  const testparse = JSON.parse(dataToSave)
  fs.writeFileSync('notes.json',dataToSave)

}


//module.exports = getNotes

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
