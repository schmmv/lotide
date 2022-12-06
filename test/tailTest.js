const { assert } = require('chai');
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for tail(['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns an array length of zero for an array of 1 element", () => {
    assert.deepEqual(tail([1]).length, 0);
  });
  it("returns an empty array for an array of 1 element", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns an empty array for being given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});

