// 6 kyu: Highest Rank Number in an Array
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  //sort through array of values
  //for the first value(a), filter and if element === second value(b) and then return length
  //for the second value(b), filter and if element === first value(a) and then return length
  //subtract the two results to sort from highest length to shorest length
  //return first index of sorted length values

  return arr.sort(
    (a, b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length
  )[0];
}
