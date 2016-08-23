var presence = new XMLHttpRequest();
presence.onreadystatechange = function(){
  if(presence.readyState === 4){
    var employees = JSON.parse(presence.responseText);
    // console.log(presence.status + ' - ' + presence.statusText + ' - ' +  presence.responseText + ' - .length = ' + employees.length);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1){
      if (employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    console.log(statusHTML);
    document.getElementById('employeeList').innerHTML = statusHTML;    
  }
};
presence.open('GET', 'data/employees.json');
presence.send();

var roomAvailability = new XMLHttpRequest();
roomAvailability.onreadystatechange = function(){
  if(roomAvailability.readyState === 4){
    var rooms = JSON.parse(roomAvailability.responseText);
    console.log(roomAvailability.status + ' - ' + roomAvailability.statusText + ' - ' + roomAvailability.responseText + ' - .length ' + rooms.length);
    var statusHTML = '<ul class="rooms">';
    for (var i = 0; i < rooms.length; i += 1){
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('rooms').innerHTML = statusHTML;
  }
};
roomAvailability.open('GET', 'data/rooms.json');
roomAvailability.send();