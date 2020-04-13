const yargs = require('yargs')

//To convert object to string

var data = [{id: 1, name:'personsName'}, {id: 2, name:'personsName2'}]
var string = JSON.stringify(data)
var object = JSON.parse(string)


yargs.command({
  command: 'add',
  describe: 'Adding entry to the list',
  builder: {
    title: {
      describe: 'Adding Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Adding body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('add executed '+ argv.title)
    //notes.addNotes(argv.title, argv.body)
  }
})
