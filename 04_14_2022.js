
// 8 kyu: Count by X
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
    let arr = [];
    for(let i = x; i <= x*n; i+= x) {
      arr.push(i)
    }
    return arr
}

// 7 kyu: Sum of the first nth term of Series
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
    let result = 1;
    let increment = 1;
    if ( n > 0) {
      for( let i = 1; i < n; i++){
          increment += 3;
          let fraction = 1/(increment);
          result += fraction;
        }
        return result.toFixed(2)
    } else {
        return '0.00'
    } 
}

