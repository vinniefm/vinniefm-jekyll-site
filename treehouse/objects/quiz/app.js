var quiz = new Quiz();

// Questions
// var qn = new Question(question, g1, g2, correct)

var q0 = new Question("2+2", "4", "5", "4");
var q1 = new Question("2+3", "6", "5", "5");
var q2 = new Question("3+3", "6", "0", "6");
var q3 = new Question("8+3", "21", "11", "11");
var q4 = new Question("1-1", "-1", "0", "0");

quiz.add(q0);
quiz.add(q1);
quiz.add(q2);
quiz.add(q3);
quiz.add(q4);

var quizElement = document.getElementById("quiz");

quiz.renderInElement(quizElement);