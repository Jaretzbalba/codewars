// 7 kyu: Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 7 kyu: Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let allLetters = new Set(s1.concat(s2));
  return Array.from(allLetters).sort().join('');
}

// 7 kyu: Sum of odd numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n ** 3;
}

// 6 kyu: Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  //initilaize count object
  //go through each word and count how many times each letter occurs
  //iterate through word again and check it agaisnt count object
  //if value > 1 return ")" else "("
  let count = {};
  word
    .toLowerCase()
    .split('')
    .map(letter => (count[letter] ? count[letter]++ : (count[letter] = 1)));

  return word
    .toLowerCase()
    .split('')
    .map(letter => (count[letter] > 1 ? ')' : '('))
    .join('');
}
