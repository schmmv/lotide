//Function that takes an array and returns an array of the elements up until an element meets the callback function criteria
const takeUntil = function(array, callback) {
  let newArr = [];
  let i = 0;
  while (!callback(array[i])) {
    newArr.push(array[i]);
    i++;
  }
  return newArr;
};

module.exports = takeUntil;