// BUSINESS LOGIC
function Player(name) {
  this.name = name;
  this.runningScore = 0;
}

// Player.prototype.roll = function() {
//   var diceRoll = Math.floor((Math.random() * 6) +1);
//   return diceRoll;
// }

Player.prototype.sendScore = function(singleRoll) {
  this.runningScore = this.runningScore + singleRoll;
}
// pushing the die value and returning a true or false
Player.prototype.singleTurn = function() {
  var roll = Math.floor((Math.random() * 6) +1);
  console.log("function called");
  if(roll === 1) {
    this.sendScore(0);
    return false;
  } else {
    this.sendScore(roll);
    return true;
  }

  }

  Player.prototype.continuePopUp = function(){
    var holdStatus = confirm('Hold?');
    return holdStatus;
  }

  function endTurn(div1, div2){
    div1.hide();
    div2.show();
  }


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


// UI LOGIC
$(function(){
  var player1 = new Player("Kelli");
  var player2 = new Player("Eric");
  var player1Div = $("#playerOneArea");
  var player2Div = $("#playerTwoArea");
  var startGameDiv = $(".startGame");

  $("#play-button").click(function(){
    event.preventDefault();
    endTurn(startGameDiv, player1Div);
  })

  $("#player1-button").click(function(){
    var singleTurnVar = player1.singleTurn();
    if (singleTurnVar === false){
      // endTurn();
    } else {
      var hold = player1.continuePopUp();
      while (hold === true) {
        player1.singleTurn();
        hold = player1.continuePopUp();
      }
    }
    // var confirm()
    // if(holdPrompt === true){
    //   player1.sendScore();
    // } else {
    //   singleTurn(roll);
    // }

  })



})
