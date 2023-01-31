const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.wins = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    this.turns++;
    let thisTurn = new Turn(guess, this.deck.cards[0]);
    var feedback = thisTurn.giveFeedback();
    if (feedback === 'correct!') {
      this.deck.cards.shift();
      this.wins++;
      return 'correct!'
    }
    else {
      this.incorrectGuesses.push(this.deck.cards[0]);
      this.deck.cards.shift();
      return 'incorrect!'
    }
  }
  calculatePercentCorrect() {
    return Math.round((this.wins / this.turns) *100);
  }
  endRound() {
    
  }
}

module.exports = Round;