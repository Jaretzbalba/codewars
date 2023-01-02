
//7 kyu: Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum( a,b ){
    let sum = 0;
    if(a === b) {
      return a
    } else if (a < b) {
      for(let i = a; i <= b; i++){
        sum += i
      } console.log(sum)
    } else if (a > b) {
      for(let i = a; i >= b; i--){
        sum += i
    } console.log(sum)
  }
}

// 8 kyu: Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

const getAverage = marks => Math.floor((marks.reduce((a,b) => a+b))/marks.length)