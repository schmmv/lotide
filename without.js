const without = function(source, itemsToRemove) {
  const arrWithout = source.filter((item) => !itemsToRemove.includes(item));
  console.log(arrWithout);
  return arrWithout;
};

module.exports = without;