const { assert } = require('chai');
const middle = require('../middle');

describe('#middle', () => {
  it("should return [] for an array of 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
