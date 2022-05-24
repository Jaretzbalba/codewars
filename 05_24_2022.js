// 6 kyu: Difference of 2
// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twosDifference(input) {
  //sort array
  //map through array and if current element === next element return those 2 numbers
  // else if current element === the next element return those 2 numbers
  // else
  return input
    .sort(function (a, b) {
      return a - b;
    })
    .filter(function (a) {
      return input.indexOf(a + 2) != -1;
    })
    .map(function (a) {
      return [a, a + 2];
    });
}
