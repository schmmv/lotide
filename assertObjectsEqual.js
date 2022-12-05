const eqObjects = require('./eqObjects');

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

const ab = { a: "1", b: "2", };
const ba = { b: "2", a: "3", };

assertObjectsEqual(ab, ba);