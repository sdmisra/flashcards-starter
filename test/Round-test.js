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

  it('should be able to return the current card being played in order', function(){

    expect(round.returnCurrentCard()).to.equal(card1)
  })
  it('rewrite', function() {
    expect(round.takeTurn('sea otter')).to.be.equal('correct!');
    expect(round.takeTurn('spleen')).to.be.equal('incorrect!');
    console.log(round.incorrectGuesses);
  })
  
  /* Good stopping point for 1/30 ---> At this point, learning how to implement beforeEach will save me the trouble of "refilling" the resources of the game to keep trying new ways to manipulate things. The error being thrown below is: 
  
  1) Round
  incorrect guesses for future review:
  TypeError: Cannot read properties of undefined (reading 'correctAnswer')
  at Turn.evaluateGuess (src/Turn.js:13:53)
  at Turn.giveFeedback (src/Turn.js:16:17)
  at Round.takeTurn (src/Round.js:16:29)
  at Context.<anonymous> (test/Round-test.js:42:11)
  at processImmediate (node:internal/timers:466:21)
  */
 
 it('should be able to calculate the percentage of correct answers', function() {
console.log('Test, you got a percentage of:', round.calculatePercentCorrect());

 })

 // it('should end the round when the deck is empty, and then report the % of correct answers)
 //(endRound)

})