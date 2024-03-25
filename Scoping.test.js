const isEven = require('./Scoping');

describe('isEven function', () => {
  // Describe block for even numbers
  describe('Even numbers', () => {
    test('should return true for 2', () => {
      expect(isEven(2)).toBe(true);
    });

    test('should return true for 10', () => {
      expect(isEven(10)).toBe(true);
    });
  });

  // Describe block for odd numbers
  describe('Odd numbers', () => {
    test('should return false for 3', () => {
      expect(isEven(3)).toBe(false);
    });

    test('should return false for 7', () => {
      expect(isEven(7)).toBe(false);
    });
  });  
});
