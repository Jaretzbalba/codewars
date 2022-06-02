// 7 kyu: Sort arrays - 1
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

sortme = function (names) {
  return names.sort();
};

// 7 kyu: Maximum Product
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  //map through array and return current value * next value
  //return max value from new array
  let finalIndex = array.length - 1;
  let newArr = array.map((e, i, a) => (i === finalIndex ? null : e * a[i + 1]));
  newArr.pop();
  return Math.max(...newArr);
}

//OR

function adjacentElementsProduct(array) {
  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}

// 7 kyu: Head, Tail, Init and Last
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x

const head = arr => arr[0];

const tail = arr => arr.slice(1, arr.length);

const init = arr => arr.slice(0, arr.length - 1);

const last = arr => arr[arr.length - 1];
