const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    this.turns++;
    let thisTurn = new Turn(guess, this.deck.cards[0]);
    if (!thisTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[0])
    }
    this.deck.cards.shift();
    return thisTurn.giveFeedback();
  }
  
  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / (this.turns) * (100));
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;

// turncount - incorectguesses.length / turncount