const { assert } = require('chai');
const findKey = require('../findKey');
const inspect = require('util').inspect; //in order to print the object to the console

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it(`should return 'Blue Hill' for the callback function x => x.stars === 1 on ${inspect(object1)}`, () => {
    assert.equal(findKey(object1, x => x.stars === 1), "Blue Hill");
  });
});
