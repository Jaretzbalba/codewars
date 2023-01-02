// 7 kyu: Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  return dna
    .split('')
    .map(e => {
      console.log(e);
      if (e === 'A') {
        return (e = 'T');
      } else if (e === 'T') {
        return (e = 'A');
      } else if (e === 'C') {
        return (e = 'G');
      } else {
        return (e = 'C');
      }
    })
    .join('');
}

// 7 kyu: Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let sortedNums = numbers.sort((a, b) => a - b);
  console.log(sortedNums);
  return sortedNums[0] + sortedNums[1];
}

// 7 kyu: Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  console.log(arr);
  return arr.reduce((a, b) => a + b, 0);
}

//OR

const getSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
