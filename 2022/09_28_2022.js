// 8 kyu: Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b ** 2, 0);
}

// 8 kyu: Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep == true).length;
}

//OR

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// 8 kyu: Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(a => Number(a));
}

//OR

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

// 8 kyu: Lost Without a Map
// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  return x.map(a => a * 2);
}

// 8 kyu: Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  return name
    .split(' ')
    .map(a => a[0].toUpperCase())
    .join('.');
}

// 8 kyu: A Needle in the Haystack
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
  let needleIndex = haystack.findIndex(a => a === 'needle');
  return `found the needle at position ${needleIndex}`;
}

// 8 kyu: Count of positives/ sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter(p => p > 0).length,
        input.filter(n => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
