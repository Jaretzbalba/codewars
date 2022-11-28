// 7 kyu: Power of two
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n) / Math.log2(2));
}

// 7 kyu: Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

function sumOfMinimums(arr) {
  return arr.map(e => Math.min(...e)).reduce((a, b) => a + b, 0);
}

//OR

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

// 7 kyu: Sorted? yes? no? how?
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let copyArr = array.slice(0);
  let copyArr2 = array.slice(0);
  let ascArr = copyArr.sort((a, b) => a - b);
  let desArr = copyArr2.sort((a, b) => b - a);
  if (array.every((val, index) => val === ascArr[index])) {
    return 'yes, ascending';
  } else if (array.every((val, index) => val === desArr[index])) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}

//OR

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';
}

// 7 kyu: Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

// 7 kyu: Greatest common divisor
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x, y) {
  let divs = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0 && y % i === 0) {
      divs.push(i);
    }
  }
  return divs[divs.length - 1];
}
