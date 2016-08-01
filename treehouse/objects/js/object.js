var person = {
  name              : 'Vince',
  city              : 'Louisville, KY',
  age               : 44,
  treehouseStudent  : true,
  skills            : ['JavaScript', 'CSS']
}

function print(message) {
  var outputDiv = document.getElementById('listDiv');
  outputDiv.innerHTML = message;
}

for ( key in person ) {
  console.log(key, ':', person[key]);
}