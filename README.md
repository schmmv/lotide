# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes it is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @micheleschulz/lotide`

**Require it:**

`const _ = require('@micheleschulz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation


The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Function that takes in 2 arrays and outputs a message indicating if they are equal (assertion passed) or not (assertion failed).
* `assertEqual(actual, expected)`: Function that takes in two values and outputs a message indicating if the assertion passed (actual === expected) or failed (actual !== expected).
* `assertObjectsEqual(object1, object2)`: Function that takes in 2 objects and outputs a message indicatin if they are equal (assertion passed) or not (assertion failed).
* `countLetters(string)`: Function that takes in a sentence (string) and returns a count of each of the letters in the sentence
* `countOnly(allItems, itemsToCount)`: Function that takes in a collection of items (allItems) and returns a specific subset (itemsToCount) of those items
* `eqArrays(array1, array2)`: Function that takes in two arrays and returns true if they are equal and false otherwise. Can handle nested arrays.
* `eqObjects(object1, object2)`: Function that takes in two objects and returns true if they are equal and false otherwise.  Can handle nested objects.
* `findKey(object, callback)`: Function that takes in an object and callback and returns the first key that meets the criteria specified in the callback
* `findKeyByValue(object, value)`: Function that takes in an object and a value and returns the first key that corresponds to that value
* `flatten(array)`: Function that takes in an array containing elements of nested arrays and returns a flattened version of the array
* `head(array)`: Function that takes in an array and returns the first element in the array
* `letterPositions(string)`: Function that takes in a string and returns all indices of letter positions in the string
* `map(array, callback)`: Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `middle(array)`: Function that takes in an array and returns the middle most element of the array. If there are an even number of elements in the array, it will return the two middle elements.
* `min(array)`: Function that takes an array of numbers and returns the smallest number.
* `tail(array)`: Function that takes an array and returns everything except the first element of the array.
* `takeUntil(array, callback)`: Function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `without(source, itemsToRemove)`: Function that takes in a source array and an itemsToRemove array and returns only the items from the source array that are not in the itemsToRemove array.

