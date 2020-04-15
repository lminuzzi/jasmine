/*
function hello(){
    return "Hello World!";
}
*/

var hello = require('../hello');

describe('Hello', () => {
    it('has to print "Hello World!"', () => {
        var text = hello();
        expect(text).toEqual('Hello World!');
    })
})
