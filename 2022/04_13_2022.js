
// 8 kyu: Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
    let total = 0
    let newArr = games.map( a => a.split(':'))
    newArr.map( b => {
      if (b[0] > b[1]) {
        return total += 3
      } else if (b[0] < b[1]) {
        return total += 0
      } else {
        return total += 1
      }
    }) 
    return total
}

//OR

function points(games) {
    let total = 0;
    games.map(game => {
      if(game[0] > game[2]) {
        total += 3
      } else if (game[0] === game[2]) {
        total += 1
      }
    })
    return total
}

// 8 kyu: Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2 * (l + w)
};

// 8 kyu: If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let string = '';
    for ( let i = 1; i <= num; i++){
      string = string.concat('',`${i} sheep...`)
    }
    return string
}

// 7 kyu: Sum of odd numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let result = 0
  let firstNum = (n * (n-1)) + 1;
  for ( let i = 0; i < n; i++) {
    result += (firstNum + (2*i))
  }
  return result
}

//OR

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}