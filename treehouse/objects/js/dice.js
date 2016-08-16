

function Dice (sides) {
  this.sides = sides;
  
}

Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) +1;
    return randomNumber;
  }

var dice = new Dice(6);
var dice20 = new Dice(20);

console.log(dice.roll === dice20.roll);