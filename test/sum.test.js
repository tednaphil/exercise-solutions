
const decodedResistorValue = require('../typescript/index')
const sum = require('../typescript/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Invokes typescript function', () => {
  expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual('33 ohms');
});