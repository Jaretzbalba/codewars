
// 8 kyu: Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    return bool === true ? "Yes" : "No"
}

// 8 kyu: Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0
    arr.forEach(num => {
      if(num >= 0) {
        sum += num
      }
    })
    return sum
}

// 8 kyu: Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = num => num <= 0 ? num: -num

// 8 kyu: String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let newstr = ''
    for(let i = 1; i <= n; i++) {
      newstr += s
    }
    return newstr
}

// 8 kyu: Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1)
};

// 8 kyu: Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let sum = 0
    for(let i=1;i<=num;i++) {
      sum += i
    }
    return sum
}

// 8 kyu: Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((a,b) => a + b**2,0 )
}

// 8 kyu: Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(' ').join('')
}

// 7 kyu: Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return Number(num.toString().split('').map(num => Number(num)* Number(num)).join(''))
}
  






