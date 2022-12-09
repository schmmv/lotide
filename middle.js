//Function that takes in an array and returns the middle element(s)
const middle = function(array) {
  let midArray = [];
  //For arrays with one or two elements, there is no middle - return an empty array
  if (array.length <= 2) {
    return midArray;
  }
  else {
    if (array.length % 2 === 0) { //Arrays with even number of elements returns an array with two middle elements
      midIndex = array.length / 2;
      midArray.push(array[midIndex - 1]);
      midArray.push(array[midIndex]);
    } else {  //Arrays with odd number of elements had only 1 middle element
      midIndex = Math.floor(array.length / 2);
      midArray.push(array[midIndex]);
    }
    return midArray;
  }
};

module.exports = middle;


