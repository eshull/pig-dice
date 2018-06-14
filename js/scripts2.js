// BUSINESS LOGIC
function Player(name){
  this.name = name;
  this.score = [];
}

Player.prototype.roll(){
  var diceRoll = Math.floor((Math.random() * 6) +1);
  console.log(diceRoll);
  return diceRoll;
}

Player.prototype.runningTotal = function(number){
    var turnTotal = [];
    turnTotal.push(number);
}

Player.prototype.confirmHold = function(){
  var holdStatus = confirm("Do you want to hold?");
  return holdStatus;
}

Player.prototype.endTurn = function(diceRoll){
    if (diceRoll === 1) {
      turnTotal = 0;
      return turnTotal;
    } else {
      diceRoll gets added to turn score
      return turn score and ask if we want to roll again
    }
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
// we need a dice value
  var diceValue = roll();
  // we need to take dice value and run through loop to continue turn
  runningTotal(diceValue);





}) /* PAGE LOAD */

// pushing the die value and returning a true or false
// Player.prototype.singleTurn = function(roll) {
//     console.log("function called");
//     this.currentRoll(roll);
//     if(roll === 1) {
//       this.sendScore(0);
//       return false;
//     } else {
//       this.sendScore(roll);
//       return true;
//     }
//   }

  // Player.prototype.currentRoll = function(instance){
  //   console.log("roll inside currentroll function" + instance);
  //   this.dieroll = instance;
  //
  // }
  //
  // Player.prototype.continuePopUp = function(){
  //   var holdStatus = confirm('Hold?');
  //   return holdStatus;
  // }
  //
  // function endTurn(div1, div2){
  //   div1.hide();
  //   div2.show();
  // }


// function endTurn(){}
// if (singleTurnVar === false) {
//   hide current player area
//   add current players final turn score to score div
//
// } else {
//   var newRoll = currentPlayer.roll();
//   confirm()
//   singleTurn(roll);
// }
