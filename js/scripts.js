// BUSINESS LOGIC
function Player(name){
  this.name = name;
  this.score = [];
}

Player.prototype.roll(){
  var roll = Math.floor((Math.random() * 6) +1);
  console.log(roll);
  return roll;
}

Player.prototype.runningTotal = function(number){
    var turnTotal = [];
    turnTotal.push(number);
}

Player.prototype.confirmHold = function(){
  var holdStatus = confirm("Do you want to hold?");
  return holdStatus;
}

while (holdStatus === true)



var Fred = new Player("Fred");


// function rollDice(){
//
// } /* ROLL DICE */
//
// function turn(roll){
//   var turnScore = roll;
//   hold = false
// while (hold === false) {
//   if (roll === 1) {
//     turnScore = 0;
//     return turnScore;
//   } else {
//     turnScore = roll + turnScore;
//   }
//   var hold = confirm("do you want to continue?")
//   if (true) {
//     hold = return turnScore;
//   } else if (false) {
//     hold = false;
//   }
// }

// Player.prototype.rollDice = function () {
//   var roll = Math.floor((Math.random() * 6) +1);
//   console.log(roll);
//   return roll;





// UI LOGIC
$(function(){

  var diceValue = roll();
  turnTotal(diceValue);




}) /* PAGE LOAD */
