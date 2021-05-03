const fib = require("./index");
const { expect } = require("chai");


describe('fib', () => {
    it('should return 0 for fib of 0', () => {
        // assertions go here
        expect(fib(0)).to.equal(0);
    });
    it('should return 1 for fib of 1', () => {
        expect(fib(1)).to.equal(1);
    });
    it('should return 21 for fib of 8', () => {
        expect(fib(8)).to.equal(21);
    })
    it('should return 3 for fib of 2', () => {
        expect(fib(3)).to.equal(2);
    })
    it('should return error message for a string', () => {
        expect(fib('hello')).to.equal('err');
    })
    it('should return error for fib of 1.3', () => {
        expect(fib(1.3)).to.equal('err');
    })
    it('should return err for negative num', () => {
        expect(fib(-2)).to.equal('err');
    })
    it('should return err for a boolian', () => {
        expect(fib(false)).to.equal('err');
        expect(fib(true)).to.equal('err');
    })
    it('should return err for a boolian', () => {
        expect(fib()).to.equal('err');
    })
    it('should return err for a null', () => {
        expect(fib(null)).to.equal('err');
    })
    it('should return ABC for fib of 100', () => {
        expect(fib(100)).to.equal(354224848179262000000);
    })
});



