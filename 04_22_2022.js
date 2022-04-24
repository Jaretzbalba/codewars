
// 7 kyu: No oddities here
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    return values.filter(a => a % 2 ===0)
}

// 7 kyu; Sum of all the multiples of 3 or 5
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
    let sum = 0;
    for(let i = 3; i <= n; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        sum += i 
      }
    }
    return sum
}