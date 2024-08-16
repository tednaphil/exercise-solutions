const chai = require("chai");
const expect = chai.expect;

const { moveRobot } = require('../javascript/index')

describe('JavaScript Exercises', () => {
    describe('MoveRobot', () => {
        it('doesn\'t end at starting position', () => {
            expect(moveRobot("GRGL")).to.equal(false);
        })
        it('ends at starting position', () => {
            expect(moveRobot("GRGRGRG")).to.equal(true);
        })
    })
})
