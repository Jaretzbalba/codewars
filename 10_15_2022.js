// 7 kyu: Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  //created nested for loop that iterates though each letter in the word
  //compare each letter to the letter preceeding it
  //return false if ever equal otherwise, return true
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// 7 kyu: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = str
    .toLowerCase()
    .split('')
    .filter(e => e === 'x').length;
  let o = str
    .toLowerCase()
    .split('')
    .filter(e => e === 'o').length;
  return x === o ? true : false;
}

// 7 kyu: Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(' ');
};

// 7 kyu: Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return Math.min(...s.split(' ').map(e => e.length));
}

// 7 kyu: Mumbling
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  //split word by ('')
  //map through each letter in the word
  //using the index of the word to add the letter repeated following a capitalized letter
  return s
    .split('')
    .map((e, i) => e[0].toUpperCase() + e.toLowerCase().repeat(i))
    .join('-');
}
