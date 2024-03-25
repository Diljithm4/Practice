const Calculator = require('./MockFunction_Calculator');

jest.mock('./MockFunction_Calculator', () => {
  return jest.fn().mockImplementation(() => {
    return {
      add: jest.fn(),
      subtract: jest.fn(),
    };
  });
});

test('should add two numbers', () => {
  const calculatorInstance = new Calculator();
  calculatorInstance.add.mockReturnValue(5);

  expect(calculatorInstance.add(2, 3)).toBe(5);
});

test('should subtract two numbers', () => {
  const calculatorInstance = new Calculator();
  calculatorInstance.subtract.mockReturnValue(2);

  expect(calculatorInstance.subtract(5, 3)).toBe(2);
});
