var http = require('https');
var lat;
var lng;
var zip;
var darkSkyUrl;
var darkSkyApiKey = 'bf920272e29471c076b976964743dda1';
var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' 
var googleKey = '&key=AIzaSyD0PayKa0-XGyOr6mwav3rKuSDJwp6O0ho';
var coords = new Array();

function printMessage(currentSummary, currentTemp){
  var message = "Current conditions are: " + currentSummary + " and " + currentTemp + "F";
  console.log(message);
}

function printError(error){
  console.error(error.message);
}

function convertZipToLatLngUrl(zip){
  var geocodeUrl = http.get(googleUrl + zip + googleKey, function(response){
    var body = "";
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      try {
        var geoParsed = JSON.parse(body);
        var darkSkyUrl = 'https://api.forecast.io/forecast/' + darkSkyApiKey + '/';
          coords[0] = geoParsed.results[0].geometry.location.lat;
          coords[1] = geoParsed.results[0].geometry.location.lng;
        darkSkyUrl += coords[0] + ',' + coords[1];
        console.log(darkSkyUrl);
        return darkSkyUrl;
      } catch(error) {
        console.log('Error response: ' + response.statusCode);
      }
    });
  });
}

var request = http.get(convertZipToLatLngUrl, function(response){
  var body = "";
  response.on('data', function(chunk){
    body += chunk;
  });
  response.on('end', function(){
    if(response.statusCode === 200){
      try {
        var weather = JSON.parse(body);
        printMessage(weather.currently.summary, weather.currently.temperature);
      } catch(error) {
        console.log('Error getting the weather from ' + darkSkyUrl + '. Status (' + response.statusCode + ').');
      }
    } else {
      console.error(response.statusCode);
    }
  });
}); 

request;
