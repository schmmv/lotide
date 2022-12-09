const { assert } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("should return 1 for the letter 'l' in 'lighthouse in the house'", () => {
    assert.equal(countLetters("lighthouse in the house")['l'], 1);
  });
  it("should return 2 for the letter 'i' in 'lighthouse in the house'", () => {
    assert.equal(countLetters("lighthouse in the house")['i'], 2);
  });
  it("should return 4 for the letter 'h' in 'lighthouse in the house'", () => {
    assert.equal(countLetters("lighthouse in the house")['h'], 4);
  });
  it("should return 2 for the letter 'o' in 'lighthouse in the house'", () => {
    assert.equal(countLetters("lighthouse in the house")['o'], 2);
  });
});