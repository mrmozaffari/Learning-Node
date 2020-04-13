const yargs = require('yargs')
//To convert object to string

var data = [{id: 'bahman', name:'personsName'}, {id: 'bahman2', name:'personsName2'}]
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


function addNotes(title){
  console.log('this is what we got from argv: ', title)
  const isDuplicate = object.filter(function(item){
    console.log('Item is: ', item)
    return item.title === title
  })
  console.log(object)
  console.log(isDuplicate)
}
