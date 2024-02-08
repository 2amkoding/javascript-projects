const checkFive = require('../checkFive.js');

describe("checkFive", function() {
    
    test("returns 'num is less than 5' when num < 5.", () =>{
        let result = checkFive(4);
        expect(result).toEqual("4 is less than 5.");
    });

    test("returns 'num is greater than 5 when num > 5.", () => {
        let result = checkFive(6);
        expect (result).toEqual("6 is greater than 5.");
    });

    test("returns 'num is equal to 5 when num === 5.", () => {
        let result = checkFive(5);
        expect(result).toEqual("5 is equal to 5.");
    });

});