let expect = require("chai").expect;
let isSymmetric = require("../CheckForSimmetry")

describe("simmetric(arr)", function() {


    it("should return true for [1, -1 1]", function() {

        expect(isSymmetric([1, -1 ,1])).to.be.equal(true);

    });
    it("should return true for []" , function () {
        expect(isSymmetric([])).to.be.equal(true)
    });
    it("should return false for {}" , function () {
        expect(isSymmetric({})).to.be.equal(false)
    });
    it("should return false for [1,2,3]" , function () {
        expect(isSymmetric([1 , 2,3])).to.be.equal(false)
    });
    it("should return false for string" , function () {
        expect(isSymmetric("string")).to.be.equal(false)
    });
    it("should return false for true" , function () {
        expect(isSymmetric(true)).to.be.equal(false)
    });
    it("should return ture for true" , function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true)
    });

});