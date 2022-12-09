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