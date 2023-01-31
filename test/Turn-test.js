const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', function() {
  it('should be a function', function() {

    const turn = new Turn();

    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.a.instanceof(Turn);
  });

  it('should hold the user\'s current guess, and return it with a method', function() {

    const currentCard = new Card(0, 'What is a domesticated animal?', ['lion', 'zebra', 'dog'], 'dog')
    const turn = new Turn('dog', currentCard);

    expect(turn.userGuess).to.equal('dog');
    expect(turn.returnGuess()).to.equal('dog');
  });

  it('should hold the current card (details), and return them with a method', function() {

    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('array', currentCard);

    expect(turn.currentCard).to.equal(currentCard);
    expect(turn.returnCard()).to.equal(currentCard);
  })
  it('should be able to evaluate if a guess is correct', function() {

    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('array', currentCard);

    expect(turn.evaluateGuess()).to.equal(false);
  })
  it('should be able to respond to the user indicating success or failure', function() {

    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'],'object')
    const turn = new Turn('array', currentCard);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
})
