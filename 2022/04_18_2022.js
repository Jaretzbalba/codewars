
// 8 kyu: Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    return Math.floor(s * 27.7778)
}

// 8 kyu: L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
    return (employed === true && vacation === false ) ? true : false
}

// 7 kyu: Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
};

// 7 kyu: Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number=function(array){
    return array.map((elem, index) => `${index+1}: ${elem}`)
}

// 7 kyu: Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw a RangeError (JavaScript) .

function factorial(n){
    let result = n
    if(n < 0 || n > 12) {
      throw RangeError
    } else if(n === 0) {
      return 1
    } else {
      for(let i = n-1; i > 0; i--) {
        result *= i
      }
    }
    return result
}

// 7 kyu: Maximum Multiple
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound){
    let result
    for(let i = bound; i > 0; i--) {
      if(i % divisor === 0) {
        return result = i
      }
    }
    return result 
}

// 7 kyu: Anagram Detection
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
    let testSplitSorted = test.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join('')
    let originalSplitSorted = original.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join('')
    if(testSplitSorted === originalSplitSorted ) {
      return true
    } else {
      return false
    }
};



