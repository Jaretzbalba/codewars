// 6 kyu: Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //convert number to string, split string
  //reduce array with multiplication
  //add to counter
  //while result > 9 loop through earlier steps
  let count = 0;
  while (num > 9) {
    let numArr = num.toString().split('');
    num = numArr.reduce((a, b) => +a * +b);
    count++;
  }
  return count;
}

// 6 kyu: Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  //initialize an empty string for final results
  //loop through input string/array and if the current element isn't in the final array, push to final array
  let finalArr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== finalArr[finalArr.length - 1]) {
      finalArr.push(iterable[i]);
    }
  }
  return finalArr;
};

// 6 kyu: Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  //split string by either "_" or "-"
  //map through array of words if index === 0 e : e.charAt(0).toUpperCase() + e.slice(1)
  //join('')
  let splitStr = str.split(/[-_]/);
  return splitStr
    .map((e, i) => (i === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
    .join('');
}

// 6 kyu: Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  //sort arr
  //if index 0 !== index 1 return index 0
  //else if index last !== index second to last return index last
  let sortedArr = arr.sort();
  if (sortedArr[0] !== sortedArr[1]) {
    return sortedArr[0];
  } else if (sortedArr[arr.length - 1] !== sortedArr[arr.length - 2]) {
    return sortedArr[arr.length - 1];
  }
}
