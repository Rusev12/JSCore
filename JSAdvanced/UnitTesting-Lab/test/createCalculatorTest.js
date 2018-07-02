let expect = require("chai").expect;
let createCalculator = require("../AddAndSubstract");


describe("calc(arr)", function() {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it("should return 5 for get 5", function() {
        calc.add(0);
        expect(calc.get()).to.be.equal(0);

    });

    it("should return 5 ", function() {
        calc.add(2); calc.add(3)
        expect(calc.get()).to.be.equal(5);

    });

    it("should return -5 ", function() {
        calc.subtract(3); calc.subtract(2)
        expect(calc.get()).to.be.equal(-5);

    });

    it("should return 4.2 ", function() {
        calc.add(5.3); calc.subtract(1.1)
        expect(calc.get()).to.be.equal(4.2);

    });

    it("should return 4.2 ", function() {
        calc.add(10); calc.subtract('7'); calc.add('-2'); calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);

    });

    it("should return 4.2 ", function() {
        calc.add("hello");
        expect(calc.get()).to.be.NaN

    });

    it("should return 4.2 ", function() {
        calc.subtract("hello");
        expect(calc.get()).to.be.NaN

    });


});