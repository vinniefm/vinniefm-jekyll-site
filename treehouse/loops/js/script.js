/*

var secret = 20000;
var randomNumber = getRandomNumber(secret);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  console.log(num);
  return num;
}

do {
  guess = prompt('Guess a number between 1 and ' + secret);
  guessCount += 1;
  if(parseInt(guess) === randomNumber) {
    correctGuess = true;    
  }
} while( ! correctGuess ) {
  document.write('<p>You guessed the random number, <strong>' + randomNumber + '</strong>, while taking <strong>' + guessCount + '</strong> guesses.</p>');
}

*/

/*

var secret = prompt("What is the secret password?");
do {
  secret = prompt("What is the secret password?");   
} while ( secret !== "sesame" ) {
  document.write("You know the secret password. Welcome."); 
}

*/
/*
var html = '';

for( var i = 1; i <= 156; i += 1) {
 console.log(i); 
 html += '<div>' + i + '</div>';
}
document.write(html);
*/

var html = '';
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

for ( i = 0; i < 100; i += 1 ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);



