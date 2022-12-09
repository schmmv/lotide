//Function that takes in an array (allItems) and returns a subset of those items
//that are included in the itemsToCount array (second array passed as an argument)
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for(const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

