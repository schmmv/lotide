const eqArrays = require('./eqArrays');

//Function prints to the console whether two arrays are equal (Assertion Passed) or not (Assertion Failed)
//Uses eqArrays to compare the arrays and return true if equal and false otherwise
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


