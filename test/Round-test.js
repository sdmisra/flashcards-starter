const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  var card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  
  var card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

  var card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  var deck = new Deck([card1, card2, card3]);
  var round = new Round(deck);
  // ^^^^^Refactor this with a beforeEach!^^^^
  it('should be a function', function() {

  expect(Round).to.be.a('function');
  })

  it('should be an instance of Deck', function() {

    expect(round).to.be.an.instanceof(Round)
  })

  it('should be able to return the current card being played', function() {
    
    expect(round.returnCurrentCard()).to.equal(card1)
  })

})