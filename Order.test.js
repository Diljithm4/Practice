const { add, subtract } = require('./Order');

describe('Math Functions', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  // This test will run first due to test.only
  test.only('performs addition before subtraction', () => {
    const result = subtract(add(5, 3), 2);
    expect(result).toBe(6);
  });

  // This test will be skipped due to test.skip
  test.skip('performs subtraction before addition', () => {
    const result = add(subtract(5, 3), 2);
    expect(result).toBe(4);
  });
});
