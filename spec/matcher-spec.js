//https://jasmine.github.io/api/2.6/matchers.html
var matcher = require('../matcher');
var toBe = matcher.toBe;
var errorReturn = matcher.errorReturn;
var toBeDefined = matcher.toBeDefined;
var toBeUndefined = matcher.toBeUndefined;
var toBeNan = matcher.toBeNan;

var result = 2;

beforeEach(function(){
    jasmine.addMatchers(myMatchers);
})

afterEach(function(){
    result = 2;
})

describe('Matcher', () => {
    describe('toBe', () => {
        //toBE
        it('is true when object a and b have same property values', () => {
            console.log(matcher)
            expect(toBe.a).toEqual(toBe.b);
        })
        it('is true when object a and b are the same object', () => {
            expect(toBe.a).toBe(toBe.a);
        })
        it('is false when object a and b are not the same object', () => {
            expect(toBe.a).not.toBe(toBe.b);
        })
    })

    describe('Others', () => {
        //toBeTruthy and toBeFalsy: If you want the values to be only true or false, prefer to use the matcher toEqual with the true or false values.
        it('is true when "Treinaweb" is the value', () => {
            expect("TreinaWeb").toBeTruthy();
        })
        it('is true when 0 is the value', () => {
            expect(0).toBeFalsy(); //Another calues considered false: false, 0, “”, undefined, null, NaN
        })

        //not
        it('is true if the value is not false', () => {
            expect(false).not.toBeTruthy();
        })

        //toContain
        it('is true if [1,2,3] contains the value 2', () => {
            expect([1,2,3]).toContain(2);
        })
        it('is true if "TreinaWeb" contains "Web"', () => {
            expect("TreinaWeb").toContain("Web");
        })
        it('is true if "Hello Web" not contains "World"', () => {
            expect("Hello Web").not.toContain("World");
        })

        //toBeDefined and toBeUndefined
        it('is true if objec have name property undefined', () => {
            expect(toBeUndefined.name).toBeUndefined();
        })
        it('is true if objec have name property defined', () => {
            expect(toBeDefined.name).toBeDefined();
        })

        //toBeNull
        it('is true if null', () => {
            expect(null).toBeNull();
        })

        //toBeNan
        /*JavaScript has a native function that checks if something is NaN. 
        *The difference is that the JavaScript function will return true for anything other than a number or numeric string, 
        *while the Jasmine function only returns true if the past value is exactly NaN.*/
        it('is true 10 is not NaN', () => {
            expect(10).not.toBeNaN();
        })
        it('is true if 0/0 is NaN', () => {
            expect(toBeNan).toBeNaN();
        })

        //toBeGreaterThan and toBeLessThan
        it('is true if 10 is greater than 1', () => {
            expect(10).toBeGreaterThan(1);
        })
        it('is true if 1 is less than 10', () => {
            expect(1).toBeLessThan(10);
        })
        it('is true if "a" is less than "z"', () => {
            expect('a').toBeLessThan('z');
        })

        //toBeCloseTo
        it('is true if 20.3 is close to 20.32 by precision 1', () => {
            expect(20.3).toBeCloseTo(20.32, 1);
        })

        //toMatch: Regular Expression
        it('is true if "TreinaWeb" finish with "Web"', () => {
            expect("TreinaWeb").toMatch(/Web/);
        })

        //toThrow: Error return
        it('is true if the function throw an error', () => {
            expect(errorReturn).toThrow();
        })

        //MyMatcher toBe2
        it('is 2', function(){
            expect(2).toBe2();
        })
    })

    describe('After Each', () => {    
        //After each test
        it('has to result in 5', () => {
            result += 3;
            expect(result).toEqual(5);
        })
        it('has to result in 9', () => {
            result += 7;
            expect(result).toEqual(9);
        })

        //unfinished spec
        xit('has to result in 12', () => {
            result += 10;
            expect(result).toEqual(1);
        })
    })

    xdescribe('Unfinished describe', () => {
        it('is not 2', function(){
            expect(8).not.toBe2();
        })
    })

    //Return after first spec
    describe('Return after first spec', () => {
        it('is true if "c" is less than "h"', () => {
            expect('c').toBeLessThan('h');
        })
        return;
        it('is true if "k" is less than "n"', () => {
            expect('k').toBeLessThan('n');
        })
        it('is true if "j" is less than "l"', () => {
            expect('j').toBeLessThan('l');
        })
    })

    //fit. fdescribe also exists
    describe('Return after first spec', () => {
        //Don't be executed
        it('is true if 34 is less than 102', () => {
            expect(34).toBeLessThan(102);
        })
        //Executed if fit used insted it. No other it will be executed if use fit
        it('is true if 39 is greater than 27', () => {
            expect(39).toBeGreaterThan(27);
        })
        //Don't be executed
        it('is true if 3 is less than 7', () => {
            expect(3).toBeLessThan(7);
        })
    })
})

var myMatchers = {
    toBe2: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var result = {}
                result.pass = actual === 2;

                if(!result.pass) {
                    result.message = "Expected " + actual + " to be exactly 2";
                }

                return result;
            }
        }
    }
}