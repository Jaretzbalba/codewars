// 7 kyu: Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  //sort array reversed and add the first two elements
  let sortedNums = numbers.sort((a, b) => b - a);
  return sortedNums[0] + sortedNums[1];
}

// 6 kyu: Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  //create an object that counts how many of each unique element
  //convert object to an array
  //filter for values that are >= 2 to check for duplicates
  //return length
  const count = {};
  text = text.toLowerCase().split('');
  for (const element of text) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return Object.entries(count).filter(([k, v]) => v >= 2).length;
}

// 6 kyu: Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  //create an array that only contains letters that have duplicates
  //map through each letter and compare it to the duplicate array
  let duplicateCheck = word
    .toLowerCase()
    .split('')
    .sort()
    .filter((e, i, a) => e == a[i + 1]);
  return word
    .toLowerCase()
    .split('')
    .map(e => (duplicateCheck.includes(e) ? ')' : '('))
    .join('');
}

//OR

function duplicateEncode(word) {
  //lowercase word, split, and iterate through each letter with map
  //if index of current element == last index of current element
  //return '(' otherwise return ')'
  //join and return
  return word
    .toLowerCase()
    .split('')
    .map((e, i, a) => (a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')'))
    .join('');
}

// 6 kyu: Replace With Alphabet Position
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //replace all non alphabet elements with empty space
  //lower case word, split, and iterate through it with map
  //replace each letter with charCode and subtract 96
  //join word and return
  text = text.replace(/[^a-z]/gi, '');
  return text
    .toLowerCase()
    .split('')
    .map(e => e.charCodeAt(0) - 96)
    .join(' ');
}
