const assertEqual = function(actual, expected) {
  let strToDisplay = "";
  if (actual === expected) {
    strToDisplay = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(strToDisplay);
};

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

//objects are equal if:
//a) they have the same number of keys
//b) the value for each key in one object is the same for that same key in the other object
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


const ab = { a: "1", b: "2", };
const ba = { b: "2", a: "1", };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3", };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false