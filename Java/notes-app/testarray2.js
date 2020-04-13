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
    }
  }
})
