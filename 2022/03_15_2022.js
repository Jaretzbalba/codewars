
// 8 kyu: Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return ((60*60*h)+(60*m)+(s))*1000
}

// 8 kyu: Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.  

function sum(numbers) {
    return numbers.reduce((a,b) => a+b, 0)
}

// 8 kyu: Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    } else {
      return number * 9
    }
}

// 8 kyu: Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().startsWith('r')){
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
}

// 8 kyu: Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}

// 8 kyu: Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    return b.toString()
}




