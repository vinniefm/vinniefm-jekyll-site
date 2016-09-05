var http = require('https');
// Print success message
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Print error messages
function printError(error){
  console.error(error.message);
}














function get(username){
  var request = http.get('https://teamtreehouse.com/' + username + '.json', function(response){
    var body = "";
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
        try {
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          console.log('Error getting profile for ' + username + ' - (' + response.statusCode + ')');
          // printError(error);
          // printError({message: "Error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        }
      // } else {
      //   printError({message: "Error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      // }
    });
  }); 

}

module.exports.get = get;