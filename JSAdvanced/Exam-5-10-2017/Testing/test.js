let Payment = require('./Payment');
let expect = require('chai').expect;


describe("TODO …", function() {

    beforeEach(function () {
        let sum = new Payment();
    });

    it('',function () {
        let pay = new Payment('asd',55)
        expect(Object.getPrototypeOf(pay).hasOwnProperty('name')).to.be.equal(true);
    });

    it('', function () {
        let pay = new Payment('asd',55)
        expect(Object.getPrototypeOf(pay).hasOwnProperty('value')).to.be.equal(true);
    });

    it('', function () {
        let pay = new Payment('asd',55)
        expect(Object.getPrototypeOf(pay).hasOwnProperty('VAT')).to.be.equal(true);
    });

    it('' , function () {
        let pay = new Payment('asd',55)
        expect(Object.getPrototypeOf(pay).hasOwnProperty('active')).to.be.equal(true);
    })
    it("testing methods …", function() {
        let pay = new Payment('asd',55)
        expect(Object.getPrototypeOf(pay).hasOwnProperty('toString')).to.be.equal(true);

    });

    it("test name is empty …", function() {
        let pay = new Payment('',55);
            expect(() =>
                pay.name
             .to.throw(Error))

    });

    it("test name is not string …", function() {

        let pay = new Payment(55,55)

        expect(() =>
            pay = new Payment(55,55)
        ).to.throw(Error);
    });

    it("test name is valid …", function() {
        let pay = new Payment('asd',55)
            pay.name = 'slavi'
            expect(pay.name).to.be.eql('slavi');


    });


    it("test value is empty …", function() {
        let pay = new Payment();
        expect(() =>
            pay = new Payment(55)
        ).to.throw(Error);
    });

    it("test value is negative number …", function() {
        expect(() =>
            pay = new Payment(55,-1)
        ).to.throw(Error);

    });

    it("test value is valid number …", function() {

           pay.value = 5

            expect(pay.value).to.be.equal(5);

    });


});


