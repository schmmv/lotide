//Function that returns, as an array, every element after the first element of an input array
const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;

