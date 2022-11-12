// 7 kyu: Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  //create array with n elements
  let squareArr = Array(n + 1).fill(0);
  let allNums = squareArr
    .map((e, i) => i ** 2)
    .join('')
    .split('');
  return allNums.filter(e => e == d).length;
}

// 7 kyu: Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
