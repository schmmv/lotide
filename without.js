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

const without = function(source, itemsToRemove) {
  let arrWithout = [];
  let found = false;
  for (let i = 0; i < source.length; i++) {
    let check = source[i];
    for (let elem of itemsToRemove) {
      if (check === elem) {
        found = true;
      }
    }
    if (!found) {
      arrWithout.push(check);
    }
    found = false;
  }
  return arrWithout;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
//test that the input array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);