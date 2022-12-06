
const countOnly = require('../countOnly');
const { assert } = require('chai');

describe('#countOnly', () => {
  it("should return the count of any item marked true found in a given list", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith", 
      "Jason", 
      "Salima",
      "Fang", 
      "Joe"
    ];
    const itemsToCount = {"Jason": false, "Karima": true, "Fang": true, "Agouhanna": true };
    assert.deepEqual(countOnly(firstNames, itemsToCount), { 'Fang': 2, 'Agouhanna': 1});
  });
})
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith", 
//   "Jason", 
//   "Salima",
//   "Fang", 
//   "Joe"
// ];
// const result1 = countOnly(firstNames, {"Jason": false, "Karima": true, "Fang": true, "Agouhanna": true });

// assertEqual(result1["Jason"], undefined);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], 1);

