// 7 kyu: Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  //split str by (' ') and map through each word and reverse it and join
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
}

// 7 kyu: Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  return array.reduce((sum, curr) => sum + curr, 0) % 2 === 0 ? 'even' : 'odd'
}

// 7 kyu: Sum of the first nth term of Series
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let result = 0
  let increment = 1
  for (let i = 0; i < n; i++) {
    result += 1 / increment
    increment += 3
  }
  return result.toFixed(2)
}

// 6 kyu: Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //check if num < 10
  //if not, convert to string and split and multiply each number together
  let times = 0
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((acc, curr) => acc * curr)
    times++
  }
  return times
}
