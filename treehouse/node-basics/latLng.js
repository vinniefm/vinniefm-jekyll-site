var http = require('https');
var zip;
var latLng = new Array();
var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var googleKey = '&key=AIzaSyD0PayKa0-XGyOr6mwav3rKuSDJwp6O0ho';

function convertZipToLatLngUrl(zip){
  var geocodeUrl = http.get(googleUrl + zip + googleKey, function(response){
    var body = "";
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      try {
        var geoParsed = JSON.parse(body);
        latLng.push(geoParsed.results[0].geometry.location.lat);
        latLng.push(geoParsed.results[0].geometry.location.lng);
        // console.log(latLng);
        return latLng;
      } catch(error) {
        printError(error);
      }
    });
  });
}

module.exports.get = convertZipToLatLngUrl;
