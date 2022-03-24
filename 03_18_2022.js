
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






