const {show} = require("./JestScope");

describe('global variable', () => {
    const text = "Hello world"; 

    test('should display "local variable 1"', () => {
        const text = "local variable 1";
        expect(show(text)).toBe("local variable 1");
     });

    test('should display local variable 2', () => { 
        const text = "local variable 2";
        expect(show(text)).toBe("local variable 2");
    }) })
