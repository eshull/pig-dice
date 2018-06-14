// BUSINESS LOGIC
function Player(name) {
  this.name = name;
  // this.dieroll = 0
  this.runningScore = 0;
  this.totalScore = 0;
}

Player.prototype.sendScore = function(singleRoll) {
  this.runningScore = this.runningScore + singleRoll;
}

Player.prototype.roll = function(){
var roll = Math.floor((Math.random() * 6) +1);
return roll;
}

Player.prototype.check100 = function(){
  if(this.totalScore >= 100){
    alert(this.name + ", you won!");
  }
}



// UI LOGIC
$(function(){
  var player1 = new Player();
  var player2 = new Player();
  var player1Div = $("#playerOneArea");
  var player2Div = $("#playerTwoArea");
  var startGameDiv = $(".startGame");

  $("#play-button").click(function(){
    event.preventDefault();
    $("#startGame").hide();
    $("#playerOneArea").show();
    player1.name = $("#playerOne").val();
    $("#player1-name").text(player1.name);
    player2.name = $("#playerTwo").val();
    $("#player2-name").text(player2.name);
    // endTurn(startGameDiv, player1Div);
  })

  $("#player1-roll-button").click(function(){
    var diceValue = player1.roll();
    $("#p1-current-roll-area").text(diceValue);
    console.log(player1.totalScore);
    // function
    // jquery grab runningscore
    if(diceValue === 1){
      player1.runningScore = 0;
      var runningScore = player1.runningScore;
      $("#p1-running-score-area").text(runningScore);
      player1.totalScore += player1.runningScore;
      console.log(player1.totalScore);
      $("#p1-total-score-area").text(player1.totalScore);
      player1.runningScore = 0;
      $("#p1-running-score-area").text(player1.runningScore);
      $("#playerOneArea").hide();
      $("#playerTwoArea").fadeIn();
      console.log(player1.totalScore);
      player1.totalScore += runningScore;
    } else {
      player1.runningScore += diceValue;
      runningScore = player1.runningScore;
      $("#p1-running-score-area").text(runningScore);
      console.log(player1.totalScore);
    }

  })

  $("#player2-roll-button").click(function(){
    var diceValue = player2.roll();
    $("#p2-current-roll-area").text(diceValue);
    console.log(player2.totalScore);
    if(diceValue === 1){
      player2.runningScore = 0;
      var runningScore = player2.runningScore;
      $("#p2-running-score-area").text(runningScore);
      player2.totalScore += player2.runningScore;
      console.log(player2.totalScore);
      $("#p2-total-score-area").text(player2.totalScore);
      player2.runningScore = 0;
      $("#p2-running-score-area").text(player2.runningScore);
      $("#playerTwoArea").hide();
      $("#playerOneArea").fadeIn();
      console.log(player2.totalScore);
      player2.totalScore += runningScore;
    } else {
      player2.runningScore += diceValue;
      runningScore = player2.runningScore;
      $("#p2-running-score-area").text(runningScore);
      console.log(player2.totalScore);
    }

  })
    // var singleTurnVar = player1.singleTurn();
    // var displayRoll = player1.currentRoll();
    // if (singleTurnVar === false){
    //   // endTurn();
    // } else {
    //   var hold = player1.continuePopUp();
    //   while (hold === true) {
    //     player1.singleTurn();
    //     hold = player1.continuePopUp();
    //   }
    // }


    $("#player1-hold-button").click(function(){
      event.preventDefault();
      console.log("clicked");
      player1.totalScore += player1.runningScore;
      player1.check100();
      console.log(player1.totalScore);
      $("#p1-total-score-area").text(player1.totalScore);
      $("#p1-opponent-score-area").text(player2.totalScore);
      $("#p2-opponent-score-area").text(player1.totalScore);
      player1.runningScore = 0;
      $("#running-score-area").text(player1.runningScore);
      $("#playerOneArea").hide();
      $("#playerTwoArea").fadeIn();
    })

    $("#player2-hold-button").click(function(){
      event.preventDefault();
      console.log("player 2 clicked");
      player2.totalScore += player2.runningScore;
      player2.check100();
      console.log(player2.totalScore);
      $("#p2-total-score-area").text(player2.totalScore);
      $("#p2-opponent-score-area").text(player1.totalScore);
      $("#p1-opponent-score-area").text(player2.totalScore);
      player2.runningScore = 0;
      $("#p2-running-score-area").text(player2.runningScore);
      $("#playerTwoArea").hide();
      $("#playerOneArea").fadeIn();
    })
    // var confirm()
    // if(holdPrompt === true){
    //   player1.sendScore();
    // } else {
    //   singleTurn(roll);
    // }





})
