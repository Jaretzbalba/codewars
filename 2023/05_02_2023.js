// 7 kyu:
// 7 kyu: Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let count = {}
  numbers.forEach(e => {
    count[e] ? count[e]++ : (count[e] = 1)
  })
  return numbers.find(e => count[e] === 1)
}

// 7 kyu: Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((e, i) => `${i + 1}: ${e}`)
}

// 7 kyu: Sort Numbers
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b)
}

// 6 kyu: Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let result = []

  for (let letter of iterable) {
    if (letter !== result[result.length - 1]) {
      result.push(letter)
    }
  }
  return result
}

//OR

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((e, i, a) => e !== a[i + 1])
}
