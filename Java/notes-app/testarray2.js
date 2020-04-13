const yargs = require('yargs')
//To convert object to string

//var data = [{id: 1, name:'personsName'}, {id: 2, name:'personsName2'}]
//var string = JSON.stringify(data)
//var object = JSON.parse(string)


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
      demandOption: false,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('add executed with title '+ argv.title)
    addNotes(argv.title)
  }
})

yargs.parse()

function addnotes(title){
  console.log('this is what we got from argv: ', title)
}
