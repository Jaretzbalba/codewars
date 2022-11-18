// 7 kyu: Form The Minimum
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

function minValue(values) {
  let filteredArr = [];
  for (let i = 0; i < values.length; i++) {
    if (!filteredArr.includes(values[i])) {
      filteredArr.push(values[i]);
    }
  }
  return +filteredArr.sort().join('');
}

//OR

function minValue(values) {
  return +Array.from(new Set(values)).sort().join('');
}

// 7 kyu: Flatten and sort an array
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

('use strict');

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// 7 kyu: Sum of numbers from 0 to N
// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count == 0) return '0=0';
    if (count < 0) return `${count}<0`;
    let result = 0;
    let finalStr = '0';
    for (let i = 1; i <= count; i++) {
      result += i;
      finalStr += `+${i}`;
    }
    return (finalStr += ` = ${result}`);
  };

  return SequenceSum;
})();

// 7 kyu: Predict your age!
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      age1 ** 2 + age2 ** 2 + age3 ** 2 + age4 ** 2 + age5 ** 2 + age6 ** 2 + age7 ** 2 + age8 ** 2
    ) / 2
  );
}

// 7 kyu: Factorial
// Your task is to write function factorial.

function factorial(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//OR

const factorial = n => (n ? factorial(n - 1) * n : 1);

// 7 kyu: Number of Decimal Digits
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
  return n.toString().length;
}

// 6 kyu: Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length == 0) {
    return `no one likes this`;
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
