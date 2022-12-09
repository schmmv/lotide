const eqObjects = require('./eqObjects');

//Function prints to the console whether two objects are equal (Assertion Passed) or not (Assertion Failed)
//Uses eqObjects function to compare the two objects, which return true if they are the same, and false otherwise
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let strToDisplay = "";
  if (eqObjects(actual, expected)) {
    strToDisplay = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(strToDisplay);
};

module.exports = assertObjectsEqual;

//Test Code
// const ab = { a: "1", b: "2", };
// const ba = { b: "2", a: "3", };
// assertObjectsEqual(ab, ba);