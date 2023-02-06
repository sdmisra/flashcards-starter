const data = require('./data')
const cardDetails = data.prototypeData;

class Deck {
  constructor(cardDetails) {
    this.cards = cardDetails;
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;