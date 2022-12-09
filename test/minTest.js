const { assert } = require('chai');
const min = require('../min');

describe('#min', () => {
  it("Should return 490 as the minimum of [1260, 490, 599, 1400, 820]", () => {
    assert.equal(min([1260, 490, 599, 1400, 820]), 490);
  });
  it("Should return -4 as the min of [-1, 3, 0, -4, 1, 4, -2]", () => {
    assert.equal(min([-1, 3, 0, -4, 1, 4, -2]), -4);
  });
  it("Should return 232 as the min of [232]", () => {
    assert.equal(min([232]), 232);
  });
});

//Other possible tests:
// const temperatures = [45, 10, -20, 0, 3, -20];
// console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);
