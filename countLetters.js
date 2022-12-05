const assertEqual = require('./assertEqual');
//Ask if it needs to take into account punctuation??*************
const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;


const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1["o"], 2);