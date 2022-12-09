//Function that returns the smallest number of an input array of numbers
const min = function(numbers) {
  let minIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
      minIndex = i;
    }
  }
  return numbers[minIndex];
};

module.exports = min;