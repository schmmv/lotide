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

const eqObjects = function(object1, object2) {
  const keysArr1 = Object.keys(object1);
  const keysArr2 = Object.keys(object2);
  
  if (keysArr1.length !== keysArr2.length) {
    return false;
  }
  for (let key of keysArr1) {
    const keyVal1 = object1[key];
    const keyVal2 = object2[key];
    if (Array.isArray(keyVal1) && Array.isArray(keyVal2)) {
      if (!eqArrays(keyVal1, keyVal2)) {
        return false;
      }
    } else if (keyVal1 !== keyVal2) {
      return false;
    }
  }
  return true;
};

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

const ab = { a: "1", b: "2", };
const ba = { b: "2", a: "3", };

assertObjectsEqual(ab, ba);