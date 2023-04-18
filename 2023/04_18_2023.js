//7 kyu: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //convert str to lowercase and split into array
  //initialzie count
  //iterate through array of letters and count each time a letter occurs
  //check if count for 'x' == count for 'o'
  str = str.toLowerCase().split('');
  let count = {};
  str.forEach(letter =>
    count[letter] ? count[letter]++ : (count[letter] = 1)
  );
  return count['x'] == count['o'];
}

// 7 kyu: Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

// 7 kyu: Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  //split string of words into individual words
  //map through each word and return their length
  //return minimum length
  return Math.min(...s.split(' ').map(word => word.length));
}

// 6 kyu: Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  //iterate through array
  //check each number if its in b
  //if it is return '' else return number
  //return new a array filtered by ''
  a = a.map(num => (b.includes(num) ? '' : num));
  return a.filter(num => num !== '');
}
