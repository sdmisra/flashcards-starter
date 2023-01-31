const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');



describe('Deck', function() {
  
it('should be a function', function() {

  const deck = new Deck(['card1', 'card2', 'card3']);

  expect(Deck).to.be.a('function');
})

it('should be an instance of Deck', function() {

  const deck = new Deck(['card1', 'card2', 'card3']);

  expect(deck).to.be.an.instanceof(Deck);
})



















})