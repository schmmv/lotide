const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


//objects are equal if:
//a) they have the same number of keys
//b) the value for each key in one object is the same for that same key in the other object
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

const ab = { a: "1", b: "2", };
const ba = { b: "2", a: "1", };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3", };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


//Driver code to test the recursive calling of eqObjects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: { w: 4}}, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { z: 1 }, b: { y: 2 }}, { a: { z: 1 }, b: 2 }), false); // => false
