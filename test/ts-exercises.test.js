const {decodedResistorValue, sum} = require('../typescript/index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Invokes typescript function', () => {
  expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual('33 ohms');
});