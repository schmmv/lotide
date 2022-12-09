const eqArrays = require('./eqArrays');

//Function that compares two objects and returns true if they are the same, false otherwise
//objects are equal if:
//a) they have the same number of keys
//b) the value for each key in one object is the same for that same key in the other object
//This function can handle nested objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { 
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof(object1[key]) === 'object' || typeof(object2[key]) === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


