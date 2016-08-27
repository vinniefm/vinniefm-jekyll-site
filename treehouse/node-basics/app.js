var profile = require("./profile.js");

// var users = [
//   'chalkers',
//   'vincemease',
//   'davemcfarland'
// ];

// 
var users  = process.argv.slice(2);
users.forEach(profile.get);

