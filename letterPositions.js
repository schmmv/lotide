//Function which will return all the indices (zero-based positions), as an array,
//in the string where each character is found
//eqArrays and assertArraysEqual used to confirm results are correct
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

const result1 = letterPositions("lighthouse in the house");
console.log(result1);
assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["i"], [1, 11]);
assertArraysEqual(result1["g"], [2]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);
assertArraysEqual(result1["t"], [4, 14]);
assertArraysEqual(result1["o"], [6, 19]);
assertArraysEqual(result1["u"], [7, 20]);
assertArraysEqual(result1["s"], [8, 21]);
assertArraysEqual(result1["e"], [9, 16, 22]);
assertArraysEqual(result1["n"], [12]);


