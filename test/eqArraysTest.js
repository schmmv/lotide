const eqArrays = require('../eqArrays');
const { assert } = require('chai');

describe('#eqArrays', () => {
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ['1', '2', 3] and ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(['1', '2', 3], ['1', '2', '3']), false);
  });
  it("should return true for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});