// 8 kyu: Basic Training: Add item to an Array
// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// add the value "codewars" to the already defined websites array
websites.push('codewars');

// 8 kyu: Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
  //sort array in descending order
  //map through array and subtext current element and next element
  //pop last value
  //reduce resulting array
  let sortedArr = arr.sort((a, b) => b - a);
  let diffs = sortedArr.map((e, i, a) => e - a[i + 1]);
  diffs.pop();
  return diffs.reduce((a, b) => a + b, 0);
}
