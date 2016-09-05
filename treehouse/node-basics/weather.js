var http = require('https');
var getLatLng = require("./latLng.js");
var darkSkyUrl = 'https://api.forecast.io/';
var darkSkyApiKey = 'bf920272e29471c076b976964743dda1/';
var lat;
var lng; 

var coords = getLatLng.get(40222);
console.log(coords);

function printMessage(currentSummary, currentTemp){
  var message = "Current conditions are: " + currentSummary + " and " + currentTemp + "F";
  console.log(message);
}

function printError(error){
  console.error(error.message);
}

var getWeather = http.get(darkSkyUrl + darkSkyApiKey, function(response){
  var body = "";
  response.on('data', function(chunk){
    body += chunk;
  });
  response.on('end', function(){
    try {
      var weather = JSON.parse(body);
      printMessage(weather.currently.summary, weather.currently.temperature);
    } catch(error) {
      console.log('Error getting the weather from ' + darkSkyUrl + darkSkyApiKey + '. Status (' + response.statusCode + ').');
    }
  });
}); 