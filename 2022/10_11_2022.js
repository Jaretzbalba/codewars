// 8 kyu: Logical calculator
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

function logicalCalc(array, op) {
  //create a kind of comparison reducer
  if (op === 'AND') {
    return array.reduce((a, b) => a && b);
  } else if (op === 'OR') {
    return array.reduce((a, b) => a || b);
  } else if (op === 'XOR') {
    return array.reduce((a, b) => (a ? !b : b));
  }
}

//OR

let ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
  return array.reduce(ops[op]);
}

// 8 kyu: Implement Array.prototype.filter()
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function (fn) {
  //create empty array
  //loop through 'this' array and push values that return true from func
  //return res array
  let res = [];
  for (var i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

//8 kyu: pick a set of first elements
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n) {
  //filter array using index n as limit
  return n === undefined ? arr.filter((e, i) => i < 1) : arr.filter((e, i) => i < n);
}

//OR

function first(arr, n = 1) {
  return arr.slice(0, n);
}
