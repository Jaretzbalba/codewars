// 7 kyu: Head, Tail, Init and Last
// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}

// 7 kyu: Sort arrays - 1
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

sortme = function (names) {
  return names.sort();
};

// 7 kyu: Sum of Triangular Numbers
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
  let result = 0;
  let add = 0;
  for (let i = 1; i <= n; i++) {
    add += i;
    result += add;
  }
  return result;
}

// 7 kyu: Bumps in the Road
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x) {
  return x.split('').filter(e => e == 'n').length <= 15 ? 'Woohoo!' : 'Car Dead';
}

// 7 kyu: Love vs friendship
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map(x => String.fromCharCode(x));
  console.log(alphabet);
  return string
    .split('')
    .map(e => alphabet.indexOf(e.toUpperCase()) + 1)
    .reduce((a, b) => a + b, 0);
}

//OR

const wordsToMarks = s => [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);

// 7 kyu: Build a square
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
  let result = '';
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      result += '+';
    }
    result += '\n';
  }
  return result.slice(0, -1);
}
