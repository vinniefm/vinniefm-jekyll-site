var questions = [
  new Question("2+2", ["4", "5"], "4"),
  new Question("2+3", ["6", "5"], "5"),
  new Question("2+4", ["6", "16"], "6")
]

var quiz = new Quiz(questions);

QuizUI.displayNext();