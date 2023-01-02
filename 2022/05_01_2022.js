// 7 kyu: Small enough? - Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit) {
  return a.find(a => a > limit) === undefined ? true : false;
}

// 7 kyu: JavaScript Array Filter
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);
