// 6 kyu: Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  //initialize empty array
  //conditional if odd add _ to end of str
  //split str and then map through array
  //if index % 2 ? e : push desired values to new arr
  let arr = [];
  if (str.length % 2) {
    str += '_';
  }
  str.split('').map((e, i, a) => (i % 2 ? e : arr.push(e + a[i + 1])));
  return arr;
}
