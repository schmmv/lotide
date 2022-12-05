const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let strToDisplay = "";
  if (eqArrays(array1, array2)) {
    strToDisplay = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
  }
  console.log(strToDisplay);
};

module.exports = assertArraysEqual;


