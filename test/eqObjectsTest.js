const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("should return true for objects that have the same key value pairs, ie are the same", () => { 
    assert.equal(eqObjects({ a: "1", b: "2", }, { b: "2", a: "1", }), true);
  });
  it("should return true for objects that are the same, even if their values include arrays", () => { 
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it("should return false for objects that are not the same", () => { 
    assert.equal(eqObjects({ c: "1", d: ["2", 3, 4] }, { c: "2", d: "1", }), false);
  });
  it("should return false for objects with nested objects that are not the same", () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: { w: 4}}, b: 2 }), false);
  });
  it("should return true for objects with nested objects that are the same", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});
