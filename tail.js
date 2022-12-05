const assertEqual = require('./assertEqual');

const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

module.exports = tail;

