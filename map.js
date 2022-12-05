const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(array1, array2) {
  let strToDisplay = "";
  if (eqArrays(array1, array2)) {
    strToDisplay = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
  }
  console.log(strToDisplay);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
const results2 = map(words, word => word + ' 🎶');
assertArraysEqual(results2, ['ground 🎶', 'control 🎶', 'to 🎶', 'major 🎶', 'tom 🎶']);
const results3 = map(words, word => word.split("").reverse().join(""));
assertArraysEqual(results3, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);