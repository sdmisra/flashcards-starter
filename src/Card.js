class Card {
  constructor(number, question, answers, theAnswer) {
    this.id = number;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = theAnswer;
  }
}

module.exports = Card;