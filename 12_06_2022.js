// 7 kyu: Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  return array
    .filter(e => e % 2 == 0)
    .reverse()
    .slice(0, number)
    .reverse();
}

//OR

const evenNumbers = (arr, num) => arr.filter(e => e % 2 == 0).slice(-num);

// 6 kyu: Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  return arr.sort().filter((e, i, a) => e !== a[1])[0];
}

//OR

function findUniq(arr) {
  arr.sort();
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

//6 kyu: Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr) {
  //findIndex where left side == right side
  //for each element calculate left side and right side
  //check if left side and right side are equal
  let leftSide = 0,
    rightSide = 0;
  return arr.findIndex((e, i) => {
    rightSide = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (e == 0) {
      leftSide = 0;
    } else {
      leftSide = arr.slice(0, i).reduce((a, b) => a + b, 0);
    }
    return leftSide == rightSide;
  });
}

//OR

function findEvenIndex(arr) {
  //findIndex where left side == right side
  //for each element calculate left side and right side
  //check if left side and right side are equal
  let leftSide = 0,
    rightSide = 0;
  return arr.findIndex((e, i) => {
    rightSide = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    leftSide = arr.slice(0, i).reduce((a, b) => a + b, 0);
    return leftSide == rightSide;
  });
}
