// 7 kyu: Get key/value pairs as arrays
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

function keysAndValues(data) {
  //initialize empty array
  //iterate through object entries of given data
  //push 'key' to 0 index of result array
  //push'value' to 1 index of result array
  let result = [[], []];
  for (const [key, value] of Object.entries(data)) {
    result[0].push(key);
    result[1].push(value);
  }
  return result;
}

//OR

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

// 7 kyu: Return the Missing Element
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

function getMissingElement(superImportantArray) {
  //sort array from min to max
  //create for loop from 0 - 9. if i !== superImportantArray[i] return i
  let sortedArr = superImportantArray.sort((a, b) => a - b);
  for (let i = 0; i <= 9; i++) {
    if (i !== sortedArr[i]) {
      return i;
    }
  }
}

// 7 kyu: Add property to every object in array
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// For example:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// After adding the property the result should be:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.

questions.forEach(x => (x.usersAnswer = null));

// 7 kyu: Simple consecutive pairs
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.

function pairs(ar) {
  //create a for loop with increments of 2
  //initialize empty array
  let pairArr = [];
  let result = 0;
  for (let i = 0; i < ar.length - 1; i += 2) {
    pairArr.push([ar[i], ar[i + 1]]);
  }
  console.log(pairArr);
  pairArr.forEach(e => {
    if (e[0] + 1 === e[1] || e[0] - 1 === e[1]) {
      result++;
    }
  });
  return result;
}

//OR

function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
  return count;
}

// 7 kyu: max diff - easy
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
  let maxVal = Math.max(...list);
  let minVal = Math.min(...list);
  return list.length == 0 ? 0 : maxVal - minVal;
}
