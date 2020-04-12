//To convert object to string
var data = [{id: 1, name:'personsName'}, {id: 2, name:'personsName2'}]
var string = JSON.stringify(data)
var object = JSON.parse(string)
console.log(string)
console.log(string.id)
console.log(data.id)
console.log(object)
console.log(object.id)
