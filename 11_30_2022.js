// 7 kyu: Speed Control
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// with the above data your function gps(s, x)should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.

function gps(s, x) {
  if (x.length <= 1) return 0;
  let result = [];
  for (let i = 0; i < x.length - 1; i++) {
    result.push(((x[i + 1] - x[i]) * 3600) / s);
  }
  return Math.floor(Math.max(...result));
}

// 7 kyu: Maximum Product
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i] * array[i + 1]);
  }
  return Math.max(...result);
}

//OR

function adjacentElementsProduct(a) {
  return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}

// 7 kyu: Digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")

function explode(s) {
  //split number
  //map through each number
  //repeat each number equal to it's value
  //join array
  return s
    .split('')
    .map(e => e.repeat(e))
    .join('');
}

// 7 kyu: Gauß needs help! (Sums of a lot of numbers).
// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

function f(n) {
  return n > 0 && Number.isInteger(n)
    ? [...Array(n + 1).keys()].slice(1).reduce((a, b) => a + b, 0)
    : false;
}

//OR

function f(n) {
  return n > 0 && Number.isInteger(n) ? (n * (n + 1)) / 2 : false;
}

// 6 kyu: Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  const count = {};
  for (const element of A) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return +Object.keys(count).find(key => count[key] % 2 !== 0);
}

//OR

function findOdd(A) {
  return A.find(e => A.filter(el => el == e).length % 2 !== 0);
}

// 6 kyu: Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(e => e !== b[i]);
  }
  return a;
}

//OR

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}
