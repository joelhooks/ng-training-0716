angular.module('guessingGame', [])
  .controller('GameCtrl', function GameCtrl() {
    var game = this,
      answer = Math.floor(Math.random() * 1000);

    game.guessCount = 0;
    
    game.calculateDelta = function() {
      game.correctAnswer = guess === answer;
      game.tooHigh = guess > answer;
      game.tooLow = guess < answer;
    };
    
    game.reset = function() {
      game.userGuess = '';
    };
    
    game.submitGuess = function(guess, event) {
      console.log(event)
      guess = parseInt(guess, 10);
      game.currentGuess = guess;
      game.guessCount++;
    }
  })
;