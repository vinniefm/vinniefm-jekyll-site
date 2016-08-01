var questions = [
  { question: 'How many US states are there?', answer: '50'},
  { question: 'How many continents are there?', answer: '7'},
  { question: 'What is 2 + 2?', answer: '4'}
];

var html;
var correctCount = 0;
var correct = [];
var incorrect = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function quizReport ( arr ) {
  var listHTML = '<ol>';
  for ( i = 0; i < arr.length; i += 1){
    listHTML += '<li>' + arr[i][0] + ' (' + arr[i][1] + ')' + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for ( i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  if ( response === answer ) {
    correctCount += 1;
    correct.push([question, answer]);
  } else {
    incorrect.push([question, answer]);
  }
}

html = '<h2>' + correctCount + ' of ' +  questions.length + ' questions correctly answered</h2>';
html += '<h3>Correctly answered questions</h3>';
html += quizReport(correct);
html += '<h3>Incorrectly answered questions</h3>';
html += quizReport(incorrect);

print(html);






  