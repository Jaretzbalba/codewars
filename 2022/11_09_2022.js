// 7 kyu: Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

// 7 kyu: Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str
    .split(' ')
    .map(e => e.split('').reverse().join(''))
    .join(' ');
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
  let result = 0;
  let denom = 1;
  for (let i = 0; i < n; i++) {
    result += 1 / denom;
    denom += 3;
  }
  return result.toFixed(2).toString();
}

//OR

function SeriesSum(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += 1 / (1 + i * 3);
  }

  return result.toFixed(2);
}
