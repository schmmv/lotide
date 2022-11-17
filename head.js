const assertEqual = function(actual, expected) {
  let strToDisplay = "";
  if (actual === expected) {
    strToDisplay = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(strToDisplay);
};

const head = function(array) {
  return array[0];
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);