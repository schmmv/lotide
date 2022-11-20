const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(array1, array2) {
  let strToDisplay = "";
  if (eqArrays(array1, array2)) {
    strToDisplay = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    strToDisplay = `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
  }
  console.log(strToDisplay);
};

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
    } else {  //Arrays with odd number of elements, return array has only 1 middle element
      midIndex = Math.floor(array.length / 2);
      midArray.push(array[midIndex]);
    }
    return midArray;
  }
};

//TEST CODE
assertArraysEqual(middle([1]), []);
