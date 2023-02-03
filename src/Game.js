const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.round = 0;
    this.cards = [];
    this.deck;
  }
  start() {
    this.makeDeck();
    this.printMessage(this.deck);
    this.printQuestion(this.round);
  }
  makeDeck() {
    for (var i = 0; i < 5; i++) {
      this.cards.push(prototypeQuestions[this.randomCard()])
    }
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
  }
  randomCard() {
    return Math.floor(Math.random() * prototypeQuestions.length)
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;