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

// 8 kyu: Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(e => !geese.includes(e));
}
