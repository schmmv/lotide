const findKey = function(object, callback) {
  const keysArr = Object.keys(object);
  for (let key of keysArr) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;