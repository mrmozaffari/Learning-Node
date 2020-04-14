/*
const square = function(x){
  return x**2
}
*/


/*
const expo = (x) => {
  return x**3
}
*/

/*
const expo = (x) => x**3
*/

/*
const event = {
  name: 'Birthday',
  GuestList: function(){
    console.log('Guest list for ' + this.name)
  }
}
*/

/*
const event = {
  name: 'Birthday',
  GuestList: () => {
    console.log('Guest list for ' + event.name)
  }
}
*/

/*
const event = {
  name: 'Birthday',
  GuestList: () => console.log('Guest list for ' + event.name)
}
*/

//********* One of the best ways

const event = {
  name: 'Birthday',
  guestList: ['bahmna','samira','pooria'],
  PrintGuestList(){
    console.log('Guest list for ' + this.name)
    this.guestList.forEach((guest) => {
      console.log(guest)
    });

  }
}

event.PrintGuestList()
