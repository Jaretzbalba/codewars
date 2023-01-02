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

// 8 kyu: Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x.reduce((a, b) => a + +b, 0);
}

// 8 kyu: Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b, 0);
}

// 8 kyu: Count the Monkeys!
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  return Array(n)
    .fill(1)
    .map((e, i) => i + 1);
}

//OR

function monkeyCount(n) {
  return Array.from({ length: n }, (e, i) => i + 1);
}

// 8 kyu: Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
  //iterate through array with for loop
  //for each iteration check if current element is -1 of next element
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1] - 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// 8 kyu: Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
  //filter through array of odd indicies
  return arr.filter((e, i) => i % 2 == 0);
}

// 8 kyu: I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
  let num = nbPetals % 6;
  switch (num) {
    case 1:
      return 'I love you';
    case 2:
      return 'a little';
    case 3:
      return 'a lot';
    case 4:
      return 'passionately';
    case 5:
      return 'madly';
    case 0:
      return 'not at all';
  }
}

// 8 kyu: Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// 8 kyu: Well of Ideas - Easy Version
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let result = 'Fail!';
  let numOfGoods = x.filter(e => e === 'good').length;
  if (numOfGoods > 0 && numOfGoods <= 2) {
    result = 'Publish!';
  } else if (numOfGoods > 0 && numOfGoods > 2) {
    result = 'I smell a series!';
  }
  return result;
}

//OR

const well = x => {
  //get number of goods in array using filter and length methods
  //use nested ternary
  //if good count is < 1 return fail if not then check good count again
  //if good count is < 3 return publish if not return I smell a series.
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1
    ? 'Fail!'
    : good_count < 3
    ? 'Publish!'
    : 'I smell a series!';
};
