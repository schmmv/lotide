const { assert } = require('chai');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe('#map', () => {
  it("should return ['g', 'c', 't', 'm', 't'] given the array ['ground', 'control', 'to', 'major', 'tom'] and callback function word => word[0]", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
});



//Other possible test code:
// const results2 = map(words, word => word + ' 🎶');
// assertArraysEqual(results2, ['ground 🎶', 'control 🎶', 'to 🎶', 'major 🎶', 'tom 🎶']);
// const results3 = map(words, word => word.split("").reverse().join(""));
// assertArraysEqual(results3, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);