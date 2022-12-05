const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

//TEST CODE
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(object1, x => x.stars === 2), "noma"); // => "noma"
assertEqual(findKey(object1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(object1, x => x.stars === 4), undefined);
