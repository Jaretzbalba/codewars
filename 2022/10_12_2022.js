// 8 kyu: Enumerable Magic #20 - Cascading Subsets
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
  //create empty array
  //use for loop and iterate through array
  //iterate (array.length - n + 1) times
  //push to empty array sliced array from i to n + i
  //return resultant array
  let res = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    res.push(array.slice(i, i + n));
  }
  return res;
}

// 8 kyu: Arguments to Binary addition
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

function arr2bin(arr) {
  //let num equal filterd arr for numbers only and reduced
  //convert num to binary
  let num = arr.filter(e => typeof e === 'number').reduce((a, b) => a + b, 0);
  return num.toString(2);
}
