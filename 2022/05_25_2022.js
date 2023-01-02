// 7 kyu: Maximum Triplet Sum (Array Series #7)
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
  //sort array of numbers
  //filter out numbers if current element !== previous element
  //slice last 3 values and reduce array
  let newArr = numbers
    .sort((a, b) => a - b)
    .filter((e, i, a) => e !== a[i + 1]);
  return newArr.slice(-3).reduce((a, b) => a + b, 0);
}

// 6 kyu: Exercise in Summing
// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger
// Example:
// var values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12

function minimumSum(values, n) {
  // sum the n smallest integers in the array values (not necessarily ordered)
  let sortedVals = values.sort((a, b) => a - b);
  return sortedVals.slice(0, n).reduce((a, b) => a + b, 0);
}

function maximumSum(values, n) {
  // sum the n largest integers in the array values (not necessarily ordered)
  let sortedVals = values.sort((a, b) => a - b);
  console.log(sortedVals);
  console.log(sortedVals.slice(-n));
  return n === 0 ? 0 : sortedVals.slice(-n).reduce((a, b) => a + b, 0);
}
