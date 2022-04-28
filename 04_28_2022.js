// 7 kyu: Fix string case
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let compareStr = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === compareStr[i]) {
      upperCaseCount++;
    } else {
      lowerCaseCount++;
    }
  }
  return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase();
}

// 7 kyu: Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

function inAscOrder(arr) {
  let falseCount = 0;
  let originalArr = arr.slice(0);
  let sortedArr = originalArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      falseCount++;
    }
  }
  return falseCount > 0 ? false : true;
}

//OR

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
