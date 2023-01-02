// 8 kyu: Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// 8 kyu: Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(' ').join('');
}
