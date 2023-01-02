// 8 kyu: Remove First and Last Character Part Two
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value.

function array(arr) {
  //split string using (',')
  //pop and shift array
  //if length === 0 return null
  //else use join(' ') on array and return value
  arr = arr.split(',');
  arr.pop();
  arr.shift();
  return arr.length === 0 ? null : arr.join(' ');
}

//OR

function array(arr) {
  return arr.split(',').slice(1, -1).join(' ') || null;
}

// 8 kyu: How many stairs will Suzuki climb in 20 years?
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s) {
  return s.map(e => e.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0) * 20;
}

// 8 kyu: Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  //sort array in descending order
  //loop through array with for loop
  //for each element subtract the next element from it and push to empty array
  //reduce resulting array and return value
  let sortedArr = arr.sort((a, b) => b - a);
  let finalArr = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    finalArr.push(sortedArr[i] - sortedArr[i + 1]);
  }
  return finalArr.reduce((a, b) => a + b, 0);
}

//OR

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// 8 kyu: Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

// 8 kyu: Multiple of index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  return array.filter((e, i) => e % i === 0);
}

// 8 kyu: Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

function addLength(str) {
  return str.split(' ').map(e => `${e} ${e.length}`);
}

// 8 kyu: No Loops 2 - You only need one
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
  return a.includes(x);
}

// 8 kyu: Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  //create variable to hold char codes of vowels
  //map through num array
  //if testCodes includes the current element, replace with char code
  //otherwise, return current value
  let testCodes = ['a', 'e', 'i', 'o', 'u'].map(e => e.charCodeAt());
  return a.map(e => (testCodes.includes(e) ? String.fromCharCode(e) : e));
}

// 8 kyu: CSV representation of array
// Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
  return array.join('\n');
}
