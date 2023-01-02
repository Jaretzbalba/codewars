// 8 kyu: Enumerable Magic #1 - True for All?
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all(arr, fun) {
  //use find method and use fun function on each element to check if return false value
  return arr.find(e => fun(e) == false) ? false : true;
}

// 7 kyu: Flatten and sort an array
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  //initialize empty array
  //map through array and map through inner array and push every element to empty array
  let arr = [];
  array.map(e => e.map(e => arr.push(e)));
  return arr.sort((a, b) => a - b);
}

// 7 kyu: Row Weights
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  //initialize final array with 2 indexes set to 0
  //map through array and if element index is even add that value to 0 index of final array
  //if not add that value to 1 index of final array
  let finalArr = [0, 0];
  array.map((e, i) => (i % 2 === 0 ? (finalArr[0] += e) : (finalArr[1] += e)));
  return finalArr;
}

// 7 kyu: Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
  //map through arr and return Math.min of each array set
  //reduce that array of value
  return arr.map(e => Math.min(...e)).reduce((a, b) => a + b, 0);
}

// 7 kyu: Sorted? yes? no? how?
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  //create variables for asecending, and descending for the given array
  //if statements for if arr == to asc/desc variable and return correct response
  let arrCopy = array.slice(0);
  let asc = arrCopy.sort((a, b) => a - b).join('');
  let arrCopy2 = array.slice(0);
  let desc = arrCopy2.sort((a, b) => b - a).join('');
  array = array.join('');
  if (array == asc) {
    return 'yes, ascending';
  } else if (array == desc) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}
