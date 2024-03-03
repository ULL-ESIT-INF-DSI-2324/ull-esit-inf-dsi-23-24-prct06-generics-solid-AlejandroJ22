"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ejercicio_1 = require("../src/ejercicios-pe/ejercicio");
describe("Numeric Collection:", () => {
    it("getItem", () => {
        const myNumericCollection1 = new ejercicio_1.NumericSearchableCollection([1, 2, 3]);
        (0, chai_1.expect)(myNumericCollection1.getItem(0)).to.be.equal(1);
        (0, chai_1.expect)(myNumericCollection1.getItem(1)).to.be.equal(2);
        (0, chai_1.expect)(myNumericCollection1.getItem(2)).to.be.equal(3);
    });
    it("addItem", () => {
        let myNumericCollection1 = new ejercicio_1.NumericSearchableCollection([]);
        myNumericCollection1.addItem(1);
        (0, chai_1.expect)(myNumericCollection1.getItem(0)).to.be.equal(1);
    });
    it("getNumberOfItems", () => {
        const myNumericCollection1 = new ejercicio_1.NumericSearchableCollection([]);
        (0, chai_1.expect)(myNumericCollection1.getNumberOfItems()).to.be.equal(0);
        const myNumericCollection2 = new ejercicio_1.NumericSearchableCollection([1]);
        (0, chai_1.expect)(myNumericCollection2.getNumberOfItems()).to.be.equal(1);
        const myNumericCollection3 = new ejercicio_1.NumericSearchableCollection([1, 2, 3]);
        (0, chai_1.expect)(myNumericCollection3.getNumberOfItems()).to.be.equal(3);
    });
    it("removeItem", () => {
        let myNumericCollection1 = new ejercicio_1.NumericSearchableCollection([1, 2]);
        myNumericCollection1.removeItem();
        (0, chai_1.expect)(myNumericCollection1.getNumberOfItems()).to.be.equal(1);
    });
    it("search", () => {
        let myNumericCollection = new ejercicio_1.NumericSearchableCollection([1, 2, 3, 4]);
        (0, chai_1.expect)(myNumericCollection.search(5)).to.be.deep.equal([]);
        myNumericCollection.addItem(5);
        (0, chai_1.expect)(myNumericCollection.search(5)).to.be.deep.equal([5]);
        myNumericCollection.addItem(5);
        (0, chai_1.expect)(myNumericCollection.search(5)).to.be.deep.equal([5, 5]);
        myNumericCollection.removeItem();
        (0, chai_1.expect)(myNumericCollection.search(5)).to.be.deep.equal([5]);
    });
});
describe("String Collection:", () => {
    it("getItem", () => {
        const myStringCollection1 = new ejercicio_1.StringSearchableCollection(["desarrollo", "sistemas"]);
        (0, chai_1.expect)(myStringCollection1.getItem(0)).to.be.equal("desarrollo");
        (0, chai_1.expect)(myStringCollection1.getItem(1)).to.be.equal("sistemas");
    });
    it("addItem", () => {
        let myStringCollection1 = new ejercicio_1.StringSearchableCollection([]);
        myStringCollection1.addItem("sistema");
        (0, chai_1.expect)(myStringCollection1.getItem(0)).to.be.equal("sistema");
    });
    it("getNumberOfItems", () => {
        const myStringCollection1 = new ejercicio_1.StringSearchableCollection([]);
        (0, chai_1.expect)(myStringCollection1.getNumberOfItems()).to.be.equal(0);
        const myStringCollection2 = new ejercicio_1.StringSearchableCollection(["desarrollo"]);
        (0, chai_1.expect)(myStringCollection2.getNumberOfItems()).to.be.equal(1);
        const myStringCollection3 = new ejercicio_1.StringSearchableCollection(["desarrollo", "sistemas"]);
        (0, chai_1.expect)(myStringCollection3.getNumberOfItems()).to.be.equal(2);
    });
    it("removeItem", () => {
        let myStringCollection1 = new ejercicio_1.StringSearchableCollection(["desarrollo", "sistemas"]);
        myStringCollection1.removeItem();
        (0, chai_1.expect)(myStringCollection1.getNumberOfItems()).to.be.equal(1);
    });
    it("search", () => {
        let myStringCollection = new ejercicio_1.StringSearchableCollection(["desarrollo", "sistemas"]);
        (0, chai_1.expect)(myStringCollection.search("desarrollo de sistemas")).to.be.deep.equal([]);
        myStringCollection.addItem("desarrollo de sistemas");
        (0, chai_1.expect)(myStringCollection.search("desarrollo de sistemas")).to.be.deep.equal(["desarrollo de sistemas"]);
        (0, chai_1.expect)(myStringCollection.search("desarrollo")).to.be.deep.equal(["desarrollo", "desarrollo de sistemas"]);
    });
});
