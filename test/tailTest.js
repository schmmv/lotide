const { assert } = require('chai');
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for tail(['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns an array length of zero for an array of 1 element", () => {
    assert.deepEqual(tail([1]).length, 0);
  });
  it("returns an empty array for an array of 1 element", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns an empty array for being given an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});


// //TEST CODE
// const test1 = tail(["Yo Yo", "Lighthouse", "Labs"]);
// assertEqual(test1.length, 2);
// assertEqual(test1[0], "Lighthouse");
// assertEqual(test1[1], "Labs");

// const test2 = tail([1]);
// assertEqual(test2.length, 0);
// assertEqual(test2[0], undefined);

// const test3 = tail([]);
// assertEqual(test3.length, 0);
// assertEqual(test3[0], undefined);