//Function which will return all the indices (zero-based positions), as an array, 
//in the string where each character is found
//eqArrays and assertArraysEqual used to confirm results are correct
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

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
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


