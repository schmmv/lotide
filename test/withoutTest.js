const { assert } = require('chai');
const without = require('../without');

describe('#without', () => {
  it("should return [2, 3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should return ['hello', 'world'] for ['hello', 'world', 'lighthouse'] without ['lighthouse']", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it("should not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});