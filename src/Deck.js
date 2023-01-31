class Deck {
  constructor(cardsToAdd) {
    this.cards = cardsToAdd;
  }
  countCards() {
    return this.cards.length
  }
}

module.exports = Deck;