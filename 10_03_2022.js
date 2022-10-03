// 8 kyu: Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 8 kyu: Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split('')
    .map(a => (a < 5 ? 0 : 1))
    .join('');
}

// 8 kyu: You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x);
}

// 8 kyu: Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
  return x.reduce((a, b) => a * b);
}

// 8 kyu: Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
  return words.join(' ');
}

// 8 kyu: Convert a string to an array
//Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(' ');
}

// 8 kyu: Count by X
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// 8 kyu: Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  //iterate through array using map
  //for each index use rules given to determine points for each match
  //return the respective points for each index
  //reduce array and return final value
  return games
    .map(a => {
      if (a[0] > a[2]) {
        return 3;
      } else if (a[0] < a[2]) {
        return 0;
      } else return 1;
    })
    .reduce((a, b) => a + b, 0);
}

//OR

function points(games) {
  return games.reduce(
    (a, b) => (a += b[0] > b[2] ? 3 : b[0] === b[2] ? 1 : 0),
    0
  );
}
