const chai = require("chai");
const expect = chai.expect;

const { twoFer } = require('../javascript/index')

describe('JavaScript Exercises', () => {
    describe('twoFer()', () => {
        it('no name given', () => {
          expect(twoFer()).to.equal('One for you, one for me.');
        });
        it('a name given', () => {
          expect(twoFer('Alice')).to.equal('One for Alice, one for me.');
        });
        it('another name given', () => {
          expect(twoFer('Bob')).to.equal('One for Bob, one for me.');
        });
      });
})
