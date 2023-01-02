
// 8 kyu: Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order.

const grow = x => x.reduce((a,b) => a * b)

// 8 kyu: Transportation on vacation
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    if( d < 7 && d >= 3 ) {
      return d * 40 - 20
    } else if ( d >= 7) {
      return d * 40 - 50
    } else {
      return d * 40
    }
}

// 7 kyu: Count the divisors of a number
// Count the number of divisors of a positive integer n.

function getDivisorsCnt(n){
    let divisorTotal = 0
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        divisorTotal++
      }
    } return divisorTotal 
}

// 7 kyu: Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    let numberArr = number.toString().split('').map(a => Number(a))
    let filterArr = numberArr.filter(a => a >= 0)
    return filterArr.reduce((a,b) => a + b)
}

//OR

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,b) => +a + +b, 0)
}