// 8 kyu: Sort and Star
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

function twoSort(s) {
  let sortedArr = s.sort();
  return sortedArr[0].split('').join('***');
}
