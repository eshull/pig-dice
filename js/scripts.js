// BUSINESS LOGIC
function Player(name) {
  this.name = name;
  this.runningScore = 0;
}

Player.prototype.roll = function() {
  var diceRoll = Math.floor((Math.random() * 6) +1);
  return diceRoll;
}

Player.prototype.sendScore = function(singleRoll) {
  this.runningScore = this.runningScore + singleRoll;
}




// UI LOGIC
$(function(){
  var player1 = new Player("Kelli");

  $(".btn").click(function(){
    var roll = player1.roll();
    console.log("roll:" + roll);

    if(roll === 1){
      player1.sendScore(0);
    } else {
    player1.sendScore(roll);
  }
  console.log("running score: " + player1.runningScore);
  })



})
