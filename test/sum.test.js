
// const { decodedResistorValue, Color, ResistorValues } = require('../typescript/index.ts')
const sum = require('../typescript/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});