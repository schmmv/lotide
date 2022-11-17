const assertEqual = function(actual, expected) {
  let strToDisplay = "";
  if (actual === expected) {
    strToDisplay = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(strToDisplay);
};

const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

//TEST CODE
const test1 = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2);
assertEqual(test1[0], "Lighthouse");
assertEqual(test1[1], "Labs");

const test2 = tail([1]);
assertEqual(test2.length, 0);
assertEqual(test2[0], undefined);

const test3 = tail([]);
assertEqual(test3.length, 0);
assertEqual(test3[0], undefined);
