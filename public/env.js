
//we keep track of the user it is either null or has a name
// we initialise to null

let username=null;

const login= ()=>{
  let user=$('#username').val()
  console.log(user)
  if(user.length<=0){
    username='Guest'
    console.log('guest')
  }else{
    username=user
  }
  $('#buttonLogin').hide()

  $('#user').html(username)

  

}

const testButtonFunction = () => {
  alert('Thank you for clicking')
}


$(document).ready(function () {

  console.log('Ready')

  //bind the button
  //$('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"', (result) => {
    console.log(result)
  })
  // initialise the tabs
  $('.tabs').tabs();

  //initialise the map 
  var map = L.map('worldMap').setView([-37.7, 145], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-37.5, 144.7]).addTo(map)
    .bindPopup('Bogan Castle')
  L.marker([-37.8, 145.1]).addTo(map)
    .bindPopup('VB Fortress')

  $('.modal').modal();

})
