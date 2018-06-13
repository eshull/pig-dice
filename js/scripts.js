// BUSINESS LOGIC
function Player(name){
  this.name = name;
  this.score = [];
}

function rollDice(){
  var roll = Math.floor((Math.random() * 6) +1);
  console.log(roll);
  return roll;
} /* ROLL DICE */

function testRoll(roll){
  var turnScore = roll;
  if (roll === 1) {
    turnScore = 0;
  }


Player.prototype.rollDice = function () {
  var roll = Math.floor((Math.random() * 6) +1);
  console.log(roll);
  return roll;


Player.prototype.score = function() {
  return this.turnscore
}



// UI LOGIC
$(function(){



}) /* PAGE LOAD */
