class Card {
  constructor(number, question, answers, theAnswer) {
    this.id = number;
    this.question = question;
    this.answer = answers;
    this.correctAnswer = theAnswer;
  }
}

module.exports = Card;