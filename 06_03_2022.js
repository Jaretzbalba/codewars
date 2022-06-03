// 7 kyu: Flatten
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array) {
  //initialze empty array
  //concat the destructured array to the empty array
  let finalArr = [];
  return finalArr.concat(...array);
};

// 7 kyu; Number Of Occurrences
// Write a function that returns the number of occurrences of an element in an array.

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function (num) {
  //filter num from array
  //return that length -1 of that array
  return this.filter(e => e === num).length;
};

function dashatize(num) {
  //absolute value of number
  //loop through array and if element index === 0 && odd add '-' in front of it
  //if element index === num.length - 1 && odd add '-' before it
  //if element is odd add '-' before and after element
  let posNum = Math.abs(num).toString().split('');
  let result = [];
  posNum = posNum.map(e => Number(e));
  for (let i = 0; i < num.length; i++) {
    if (posNum[i] % 2 !== 0 && i == 0) {
      result.push(`${posNum[i]}-`);
      console.log(result);
    } else if (posNum[i] % 2 !== 0 && i === num.length - 1) {
      result.push(`-${posNum[i]}`);
      console.log(result);
    } else if (posNum[i] % 2) {
      result.push(`-${posNum[i]}-`);
    } else {
      result.push(`${posNum[i]}`);
    }
  }
  return result;
}

// 6 kyu: Dashatize it
// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  //convert num to string and split by ('')
  //map through that new array of split numbers
  // if odd at "-" before and after if even just return value
  //join array and the split again by ('-')
  //filter out elements that are empty values now
  //join again by ('-')
  return (num = num
    .toString()
    .split('')
    .map(function (c) {
      return c % 2 ? '-' + c + '-' : c;
    })
    .join('')
    .split('-')
    .filter(a => a != '')
    .join('-'));
}
