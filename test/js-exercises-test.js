const chai = require("chai");
const expect = chai.expect;

const { moveRobot, paliSum, factorize, steps } = require('../javascript/index')

describe('JavaScript Exercises', () => {
    describe('MoveRobot', () => {
        it('doesn\'t end at starting position', () => {
            expect(moveRobot("GRGL")).to.equal(false);
        });
        it('ends at starting position', () => {
            expect(moveRobot("GRGRGRG")).to.equal(true);
        });
    });
    describe('PaliSum', () => {
        it('returns an array of twenty-five integers where the number plus its inverse equals a palindrome greater than 1,000', () => {
            const arrayONumbers = paliSum();
            expect(arrayONumbers).to.deep.equal([
                209,  308,  407,  506,  605,
                704,  803,  902, 1000, 1001,
               1002, 1003, 1004, 1005, 1006,
               1007, 1008, 1010, 1011, 1012,
               1013, 1014, 1015, 1016, 1017
             ]);
        });
    });
    describe('Factorize', () => {
        it('returns an array of factors for a provided whole number', () => {
            expect(factorize(12)).to.deep.equal([1, 2, 3, 4, 6, 12]);
        });
        it('returns an array of factors for another provided whole number', () => {
            expect(factorize(4)).to.deep.equal([1, 2, 4]);
        });
        it('returns an array of factors for a prime number', () => {
            expect(factorize(17)).to.deep.equal([1, 17]);
        });
    });
    describe('Steps', () => {
        it('zero steps for one', () => {
          expect(steps(1)).to.equal(0);
        });
        it('divide if even', () => {
          expect(steps(16)).to.equal(4);
        });
        it('even and odd steps', () => {
          expect(steps(12)).to.equal(9);
        });
        it('large number of even and odd steps', () => {
          expect(steps(1000000)).to.equal(152);
        });
        it('zero is an error', () => {
          expect(() => {
            steps(0);
          }).to.throw('Only positive numbers are allowed');
        });
        it('negative value is an error', () => {
          expect(() => {
            steps(-15);
          }).to.throw('Only positive numbers are allowed');
        });
      });
})
