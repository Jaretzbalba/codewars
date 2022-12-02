// 7 kyu: Unlucky Days
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  let d = new Date();
  let counter = 0;
  let month;

  for (month = 0; month < 12; month++) {
    d.setFullYear(year, month, 13);
    if (d.getDay() == 5) {
      counter++;
    }
  }
  return counter;
}

// 7 kyu: Most digits
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let longestStr = Math.max(...array.map(e => e.toString().length));
  return +array.map(e => e.toString()).find(e => e.length == longestStr);
}

// 6 kyu: Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let counter = 0;
  let numArr = [];
  while (num >= 10) {
    numArr = [...(num + '')];
    num = numArr.reduce((a, b) => +a * +b);
    counter++;
  }
  return counter;
}
