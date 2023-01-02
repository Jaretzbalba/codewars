// 7 kyu: Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
  //initialize empty array
  //filter arr with just even numbers and reverse array
  //loop through new array and push up to the given number to an empty array
  let result = [];
  let newArr = array.filter(e => e % 2 === 0).reverse();
  for (let i = 0; i < number; i++) {
    result.unshift(newArr[i]);
  }
  return result;
}

//OR

const evenNumbers = (array, number) =>
  //filter through array for even numbers and slice starting from end of array
  array.filter(item => item % 2 === 0).slice(-number);
