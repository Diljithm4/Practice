
const { addition, subtraction, multiplication, division } = require("./Operators");

describe('addition function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(addition(1, 2)).toBe(3);
    });

    test('adds -3 + 5 to equal 2', () => {
        expect(addition(-3, 5)).toBe(2);
    });

});

describe('subtraction function', () => {
    test('subtracts 4 - 2 to equal 2', () => {
        expect(subtraction(4, 2)).toBe(2);
    });

    test('subtracts 0 - 7 to equal -7', () => {
        expect(subtraction(0, 7)).toBe(-7);
    });

});

describe('multiplication function', () => {
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiplication(3, 4)).toBe(12);
    });

    test('multiplies -2 * 6 to equal -12', () => {
        expect(multiplication(-2, 6)).toBe(-12);
    });

});

describe('division function', () => {
    test('divides 8 / 2 to equal 4', () => {
        expect(division(8, 2)).toBe(4);
    });

    test('divides 10 / 0 to be Infinity', () => {
        expect(division(10, 0)).toBe(Infinity);
    });

});
