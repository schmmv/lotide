const assertEqual = function(actual, expected) {
  let strToDisplay = "";
  if (actual === expected) {
    strToDisplay = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(strToDisplay);
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if(letter !== " ") {
      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));