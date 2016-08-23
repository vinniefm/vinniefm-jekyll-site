$(document).ready(function() {
  var url="data/employees.json";
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee){
      console.log(employee.length);
      if(employee.inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); //end getJSON
}); // end ready function