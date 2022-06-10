// 7 kyu: Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  //if any element isn't a number in array return undefined
  //sum through the array with reduce and cubing only the even elements
  if (arr.find(e => typeof e !== 'number') !== undefined) return undefined;
  return arr.reduce((a, b) => a + (b % 2 ? b ** 3 : 0), 0);
}

// 7 kyu: Counting Array Elements
// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

function count(array) {
  //initialize empty object
  //iterate through array with forEach
  //for each element either grab the previous value or initialze to 0 and then add 1
  //return names and their count
  var names = {};
  array.forEach(item => {
    names[item] = (names[item] || 0) + 1;
  });
  return names;
}

// 7 kyu: Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
  //filter array if element typeof === number and reduce
  //filter array if element typeof !== number and reduce
  //return difference of two vals
  let nonStrInt = x
    .filter(e => typeof e === 'number')
    .reduce((a, b) => a + b, 0);
  let strInt = x.filter(e => typeof e !== 'number').reduce((a, b) => a + +b, 0);
  return nonStrInt - strInt;
}
