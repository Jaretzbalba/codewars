// 7 kyu: Find the capitals
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  let lowerCaseWord = word.toLowerCase().split('');
  return word
    .split('')
    .map((e, i) => (e == lowerCaseWord[i] ? e : i))
    .filter(e => typeof e === 'number');
};

// 7 kyu: Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  return a.every(e => e <= limit);
}

// 7 kyu: Maximum Multiple
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

// 7 kyu: The Coupon Code
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  } else if (enteredCode === correctCode && new Date(currentDate) > new Date(expirationDate)) {
    return false;
  } else {
    return true;
  }
}

// 7 kyu: Maximum Length Difference
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let a1Length = a1.map(e => e.length);
  let a2Length = a2.map(e => e.length);
  return Math.max(
    ...[
      Math.abs(Math.min(...a1Length) - Math.max(...a2Length)),
      Math.abs(Math.max(...a1Length) - Math.min(...a2Length)),
    ]
  );
}
