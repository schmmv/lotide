const assertArraysEqual = require('./assertArraysEqual');
// const without = function(source, itemsToRemove) {
//   let arrWithout = [];
//   let found = false;
//   for (let i = 0; i < source.length; i++) {
//     let check = source[i];
//     for (let elem of itemsToRemove) {
//       if (check === elem) {
//         found = true;
//       }
//     }
//     if (!found) {
//       arrWithout.push(check);
//     }
//     found = false;
//   }
//   return arrWithout;
// };

const without = function(source, itemsToRemove) {
  const arrWithout = source.filter((item) => !itemsToRemove.includes(item));
  console.log(arrWithout);
  return arrWithout;
};

module.exports = without;

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
//test that the input array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);