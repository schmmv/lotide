const assertEqual = function(actual, expected) {
  let strToDisplay = "";
  if (actual === expected) {
    strToDisplay = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(strToDisplay);
};

const findKeyByValue = function(object, value) {
  const keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
