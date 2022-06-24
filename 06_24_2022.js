// 7 kyu: Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  //split string by ('')
  //use map method and add space after each element
  //join by ('') and then trim str
  console.log(str.split('').map(e => ` ${e} `));
  return str
    .split('')
    .map(e => `${e} `)
    .join('')
    .trim();
}

// 7 kyu: Largest Elements
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, xs) {
  //if n is equal to 0 then return empty array else
  //sort array of numbers
  //slice array from -n
  return n === 0 ? [] : xs.sort((a, b) => a - b).slice(-n);
}

// 7 kyu: Minimize Sum Of Array (Array Series #1)
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  //sort array from min to max
  //initialize variable for half of length of num array
  //initialize empty array
  //initialize final value
  //use a for loop through iterate through array of numbers

  let sortedArr = arr.sort((a, b) => a - b);
  let m = arr.length / 2;
  let finalVal = 0;
  for (let i = 0; i < m; i++) {
    finalVal += sortedArr[0] * sortedArr[arr.length - 1];
    sortedArr.pop();
    sortedArr.shift();
  }
  return finalVal;
}
