const { assert } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it("should return [1, 2, 5, 7, 2] given the array [1, 2, 5, 7, 2, -1, 2, 4, 5] and the callback function x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
});

//Other possible test code:
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
