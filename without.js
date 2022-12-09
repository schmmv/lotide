//Function that takes in an array (source) and filters out the elements in the itemsToRemove array
//Returns the result as a new array
const without = function(source, itemsToRemove) {
  const arrWithout = source.filter((item) => !itemsToRemove.includes(item));
  return arrWithout;
};

module.exports = without;