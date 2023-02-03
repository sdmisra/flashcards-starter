const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(()=> {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
    // console.log(` 1) ${card1}, 2) ${card2}, 3) ${card3}, 4) ${deck}, 5) ${round}`);
  })

  it('should be a function', function() {

  expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {

    expect(round).to.be.an.instanceof(Round)
  })

  it('should be able to return the current card being played in order', function(){

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should be able to take turns, and with a successful guess return feedback', function() {

    expect(round.takeTurn('sea otter')).to.be.equal('correct!');
    expect(round.takeTurn('spleen')).to.be.equal('incorrect!');
  })

 it('should be able to calculate the percentage of correct answers', function() {
  round.takeTurn('sea otter');
  round.takeTurn('spleen');

  expect(round.calculatePercentCorrect()).to.be.equal(50)
 })
})