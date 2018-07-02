let expect = require("chai").expect;
let rgbToHexColor = require("../RGBToHex");

describe("rgbToHex(arr)", function() {


    it("should return undifined for [-1 , 0 , 0]", function() {

        expect(rgbToHexColor(-1 , 0 , 0)).to.be.undefined

    });

    it("should return undifined for [-1 , 0 , 0]", function() {

        expect(rgbToHexColor(0 , -1 , 0)).to.be.undefined

    });

    it("should return undifined for [-1 , 0 , 0]", function() {

        expect(rgbToHexColor(0 , 0 , -1)).to.be.undefined

    });

    it("should return #19191E for [25 , 25 , 30]", function() {

        expect(rgbToHexColor(25 , 25 , 30)).to.be.equal("#19191E")

    });

    it("should return undefined for [300 , 25 , 30]", function() {

        expect(rgbToHexColor(300 , 25 , 30)).to.be.undefined

    });

    it("should return undefined for [300 , 25 , 30]", function() {

        expect(rgbToHexColor(25 , 300 , 30)).to.be.undefined

    });

    it("should return undefined for [300 , 25 , 30]", function() {

        expect(rgbToHexColor(25 , 25 , 300)).to.be.undefined

    });

    it("should return undefined for []", function() {

        expect(rgbToHexColor([])).to.be.undefined

    });
    it("should return undefined for {}", function() {

        expect(rgbToHexColor({})).to.be.undefined

    });
    it("should return undefined for [3.14 0 2 ]", function() {

        expect(rgbToHexColor(3.14 , 0  , 2)).to.be.undefined

    });
    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor(0 ,3.14 , 2)).to.be.undefined

    });
    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor(0 ,3 , 2.3)).to.be.undefined

    });
    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor("5" ,[3] , {})).to.be.undefined

    });
    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor()).to.be.undefined

    });

    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor(255 , 255 , 255)).to.be.equal('#FFFFFF');

    });

    it("should return undefined for [0 3.14 2 ]", function() {

        expect(rgbToHexColor(0 , 0 , 0)).to.be.equal('#000000');

    });

});