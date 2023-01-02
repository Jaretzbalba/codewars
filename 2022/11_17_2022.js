// 7 kyu: Fizz Buzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if ((i % 5 === 0) & (i % 3 === 0)) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

// 7 kyu: Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array2[i] == '') {
      score += 0;
    } else if (array1[i] == array2[i]) {
      score += 4;
    } else if (array1[i] !== array2[i]) {
      score--;
    }
  }
  return score < 0 ? 0 : score;
}

// 7 kyu: Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  return [
    s
      .split('')
      .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e))
      .join(''),
    s
      .split('')
      .map((e, i) => (i % 2 !== 0 ? e.toUpperCase() : e))
      .join(''),
  ];
}

// 7 kyu: Fix string case
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
  let lowerCaseCount = 0,
    upperCaseCount = 0;
  let origStr = s.split('');
  let lowerCaseStr = s.toLowerCase().split('');
  let upperCaseStr = s.toUpperCase().split('');
  for (let i = 0; i < s.length; i++) {
    if (origStr[i] == lowerCaseStr[i]) {
      lowerCaseCount++;
    } else if (origStr[i] == upperCaseStr[i]) upperCaseCount++;
  }
  return lowerCaseCount >= upperCaseCount ? lowerCaseStr.join('') : upperCaseStr.join('');
}

// 7 kyu: JavaScript Array Filter
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(e => e % 2 === 0);
}
