const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', function() {
  it.skip('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function')
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.a.instanceof(Turn);
  });

  it.skip('should hold the user\'s current guess', function() {
    const currentCard = new Card(0, 'What is a domesticated animal?', ['lion', 'zebra', 'dog'], 'dog')
    const turn = new Turn('dog', currentCard);
    expect(turn.userGuess).to.equal('dog');
  });

  it.skip('should hold the current card (details)', function() {
    let currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  })

} )