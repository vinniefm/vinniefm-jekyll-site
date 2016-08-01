/*
- Create array of 5 students
-- Name
-- Track
-- Achievements/badge count (number value)
-- Points (number value)
 */

var message = '';
var student;
var search;


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report    += '<p>Track: ' + student.track + '</p>';
  report    += '<p>Achievements: ' + student.achievements + '</p>';
  report    += '<p>Points: ' + student.points + '</p>';
  return report;
}

while (true) {
  search = prompt('Search for a student by name or "quit" to end.');
  if (search === null || search.toLowerCase() === 'quit' ){
    break;
  } 
  for ( i = 0; i < students.length; i += 1){
    student = students[i];
    if ( student.name === search ){
      message = getStudentReport(student);
      print(message);
      break;
    }
  }
}

// console.log(search);
// var search = search.toLowerCase();

// console.log(search);

print(message);


