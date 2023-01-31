class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;

  }
  returnGuess() {
    return this.userGuess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    return (this.returnGuess() === this.currentCard.correctAnswer);
  }
  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn;