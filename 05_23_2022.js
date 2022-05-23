// 6 kyu: Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  //split string and map through string array
  //if element === element capitalized then return that element with a space before it
  //join array by ('') and return
  return string
    .split('')
    .map((e, i, a) => (e === e.toUpperCase() ? ` ${e}` : e))
    .join('');
}
