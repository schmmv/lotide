const without = function(source, itemsToRemove) {
  const arrWithout = source.filter((item) => !itemsToRemove.includes(item));
  return arrWithout;
};

module.exports = without;