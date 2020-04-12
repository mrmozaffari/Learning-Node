const fs = require('fs')
const getNotes = function() {
  return "These are my notes"
}

const addNotes = function(title, body) {
  const notes = loadNotes()
  console.log('notes ',notes)
  console.log('notes title ',notes.title)

  const duplicateNotes = notes.filter(function(note){
    return notes.title === title
  })
  console.log('duplicate value: '+duplicateNotes)
  console.log(duplicateNotes.length)
  console.log('***********')


  if(duplicateNotes.length===0){
    console.log('We are pushing:', notes)
    notes.push({
      title: title,
      body: body
    })
    console.log('Here the Notes: ', notes)
    saveNotes(notes)
  }else {
    console.log('This is duplicate title: '+title)
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSONstring = dataBuffer.toString()
    console.log('This is the string ', dataJSONstring)
    const datajson = JSON.parse(dataJSONstring)
    console.log('data in json is: ',datajson)
    console.log(datajson.title)
    console.log('bbbbbbbb ',datajson.title)
    return dataJson
  } catch (e) {
    return []
  }
}
//
const saveNotes = function(notes){
  const dataToSave = JSON.stringify(notes)
  console.log('this test: ', notes.title)
  console.log('this is data after stringfy: ', dataToSave)
  const testparse = JSON.parse(dataToSave)
  console.log('after parse: ',testparse.title)
  //fs.writeFileSync('notes.json',dataToSave)

}


//module.exports = getNotes

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
