function Question(question, g1, g2, correct){
  this.question = question;
  this.g1 = g1; // guess1
  this.g2 = g2; // guess2
  this.correct = correct;
}

Question.prototype.toHTML = function() {
  var htmlString = '<h1>Awesome Quiz</h1>';
  htmlString    += '<h2 id="question" class="headline-secondary--grouped">';
  htmlString    += this.question;
  htmlString    += '</h2>';
  htmlString    += '<h3 id="score"></h3>';
  htmlString    += '<p id="choice0">' + this.g1 + '</p>';
  htmlString    += '<button id="guess0" class="btn--default">Select Answer</button>';
  htmlString    += '<p id="choice1">' + this.g2 + '</p>';
  htmlString    += '<button id="guess1" class="btn--default">Select Answer</button>';
  // htmlString    += '<footer><p id="progress">Question ' + Quiz.currentQuestionIndex + 1 + ' of ' + Quiz.questions.length + '</p></footer>';

  return htmlString;
}