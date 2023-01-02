// 6 kyu: Array Deep Count
//  Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7

// RECURSIVE FUNCTION!!
function deepCount(a) {
  return a.reduce(
    (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
    a.length
  );
}

// 8 kyu: Multiple of index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  //filter array if element % index === 0
  return array.filter((e, i) => e % i === 0);
}

// 8 kyu: Printing Array elements with Comma delimiters
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array) {
  return array.join(',');
}

// 8 kyu: Remove First and Last Character Part Two
// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(arr) {
  //if arr.length < 3 return null
  //else slice(1,-1)
  return arr.split(',').length < 3
    ? null
    : arr.split(',').slice(1, -1).join(' ');
}

// 8 kyu: Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

// 8 kyu: Add Length
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

function addLength(str) {
  return str.split(' ').map(a => `${a} ${a.length}`);
}
