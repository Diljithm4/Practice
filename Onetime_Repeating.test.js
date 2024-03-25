const sum = require('./Onetime_Repeating');

// One-time test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Repeating test
describe('Repeating Tests', () => {
  const testCases = [
    { a: 2, b: 3, expected: 5 },
    { a: -1, b: 1, expected: 0 },
    { a: 0, b: 0, expected: 0 },
    { a: -5, b: -5, expected: -10 },
  ];

  testCases.forEach(({ a, b, expected }) => {
    test(`adds ${a} + ${b} to equal ${expected}`, () => {
      expect(sum(a, b)).toBe(expected);
    });
  });
});
