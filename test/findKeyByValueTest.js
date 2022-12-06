const { assert } = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe('#findKeyByValue', () => {
  it("should return object key 'drama' for object value 'The Wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined for an object value the doesn't exist", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
});