import "mocha";
import { expect } from "chai";

import { NumericSearchableCollection, StringSearchableCollection } from "../src/ejercicios-pe/ejercicio";

describe("Numeric Collection:", () => {
  it("getItem", () => {
    const  myNumericCollection1 = new NumericSearchableCollection([1, 2, 3]);
    expect(myNumericCollection1.getItem(0)).to.be.equal(1);
    expect(myNumericCollection1.getItem(1)).to.be.equal(2);
    expect(myNumericCollection1.getItem(2)).to.be.equal(3);
  });
  it("addItem", () => {
    let myNumericCollection1 = new NumericSearchableCollection([]);
    myNumericCollection1.addItem(1);
    expect(myNumericCollection1.getItem(0)).to.be.equal(1);
  });
  it("getNumberOfItems", () => {
    const myNumericCollection1 = new NumericSearchableCollection([]);
    expect(myNumericCollection1.getNumberOfItems()).to.be.equal(0);
    const myNumericCollection2 = new NumericSearchableCollection([1]);
    expect(myNumericCollection2.getNumberOfItems()).to.be.equal(1);
    const myNumericCollection3 = new NumericSearchableCollection([1, 2, 3]);
    expect(myNumericCollection3.getNumberOfItems()).to.be.equal(3);
  });
  it("removeItem", () => {
    let myNumericCollection1 = new NumericSearchableCollection([1, 2]);
    myNumericCollection1.removeItem();
    expect(myNumericCollection1.getNumberOfItems()).to.be.equal(1);
  })
  it("search", () => {
    let myNumericCollection = new NumericSearchableCollection([1, 2, 3, 4]);
    expect(myNumericCollection.search(5)).to.be.deep.equal([]);
    myNumericCollection.addItem(5);
    expect(myNumericCollection.search(5)).to.be.deep.equal([5]);
    myNumericCollection.addItem(5);
    expect(myNumericCollection.search(5)).to.be.deep.equal([5, 5]);
    myNumericCollection.removeItem();
    expect(myNumericCollection.search(5)).to.be.deep.equal([5]);
  })
});

describe("String Collection:", () => {
    it("getItem", () => {
        const myStringCollection1 = new StringSearchableCollection(["desarrollo", "sistemas"]);
        expect(myStringCollection1.getItem(0)).to.be.equal("desarrollo");
        expect(myStringCollection1.getItem(1)).to.be.equal("sistemas");
    });
    it("addItem", () => {
      let myStringCollection1 = new StringSearchableCollection([]);
      myStringCollection1.addItem("sistema");
      expect(myStringCollection1.getItem(0)).to.be.equal("sistema");
    });
    it("getNumberOfItems", () => {
      const myStringCollection1 = new StringSearchableCollection([]);
      expect(myStringCollection1.getNumberOfItems()).to.be.equal(0);
      const myStringCollection2 = new StringSearchableCollection(["desarrollo"]);
      expect(myStringCollection2.getNumberOfItems()).to.be.equal(1);
      const myStringCollection3 = new StringSearchableCollection(["desarrollo", "sistemas"]);
      expect(myStringCollection3.getNumberOfItems()).to.be.equal(2);
    });
    it("removeItem", () => {
      let myStringCollection1 = new StringSearchableCollection(["desarrollo", "sistemas"]);
      myStringCollection1.removeItem();
      expect(myStringCollection1.getNumberOfItems()).to.be.equal(1);
    })
    it("search", () => {
      let myStringCollection = new StringSearchableCollection(["desarrollo", "sistemas"]);
      expect(myStringCollection.search("desarrollo de sistemas")).to.be.deep.equal([]);
      myStringCollection.addItem("desarrollo de sistemas");
      expect(myStringCollection.search("desarrollo de sistemas")).to.be.deep.equal(["desarrollo de sistemas"]);
      expect(myStringCollection.search("desarrollo")).to.be.deep.equal(["desarrollo", "desarrollo de sistemas"]);
    })
  });