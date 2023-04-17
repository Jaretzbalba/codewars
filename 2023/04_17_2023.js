// 7 kyu: Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  //check word length
  //if = odd, return middle
  //if = even, return middle 2
  return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}

//7 kyu: List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  //iterate through array of values
  //filter aka return only values that have the typeof number
  return l.filter(e => typeof e == 'number');
}

// 7 kyu: Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  //convert input string to lowercase and split
  //create empty letters array
  //iterate through each letter in string
  //use every method to test each letter is included in letters array
  //if not, return true, else return false
  str = str.toLowerCase().split('');
  let letters = [];
  return str.every(letter => {
    if (letters.includes(letter)) {
      return false;
    } else {
      letters.push(letter);
      return true;
    }
  });
}

// 6 kyu: Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  //initialize an empty object
  //iterate through array of nums and count each time a number occurs
  //iterate through object and check which number has a odd value
  //return number
  let numObj = {};
  A.forEach(num => {
    numObj[num] ? numObj[num]++ : (numObj[num] = 1);
  });

  for (num in numObj) {
    if (numObj[num] % 2 !== 0) return Number(num);
  }
}
