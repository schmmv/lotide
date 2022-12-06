const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("should return [0] for 'l' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['l'], [0]);
  });
  it("should return [1, 11] for 'i' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['i'], [1, 11]);
  });
  it("should return [2] for 'g' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['g'], [2]);
  });
  it("should return [3, 5, 15, 18] for 'h' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
  });
  it("should return [4, 14] for 't' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['t'], [4, 14]);
  });
  it("should return [6, 19] for 'o' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['o'], [6, 19]);
  });
  it("should return [7, 20] for 'u' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['u'], [7, 20]);
  });
  it("should return [8, 21] for 's' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['s'], [8, 21]);
  });
  it("should return [9, 16, 22] for 'e' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['e'], [9, 16, 22]);
  });
  it("should return [12] for 'n' in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')['n'], [12]);
  });
})
