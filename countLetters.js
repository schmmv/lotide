//Function that counts how many occurences of each letter are in a given string/sentence
//Returns the result as an object
//Assumes no punctuation in the string
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