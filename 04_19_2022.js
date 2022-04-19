

// 7 kyu: Sum of a sequence
// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    let result = 0
    for(let i = begin; i <= end; i += step) {
      result += i
    }
    return result
};

// 8 kyu: Twice as old
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleSonAge = sonYearsOld * 2;
    let yearToDouble = 0
    if((dadYearsOld/2) > doubleSonAge) {
      for(let i = dadYearsOld; i > doubleSonAge; i--) {
        yearToDouble += 1
      } 
    } else {
        for(let j = dadYearsOld; j < doubleSonAge; j++) {
          yearToDouble += 1
        }
    }
    return yearToDouble
}

//OR

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

/// 7 kyu: Maximum Length Difference
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1.

function mxdiflg(a1, a2) {
    let a1LengthArray = a1.map(a => a.length)
    let a2LengthArray = a2.map(a => a.length)
    let arrOfLengthDiff = []
    if (a1.length === 0 || a2.length === 0){
      return -1
    }
    for(let i = 0; i < a1LengthArray.length; i++) {
      for(let j = 0; j < a2LengthArray.length; j++) {
        let diff = Math.abs(a1LengthArray[i] - a2LengthArray[j])
        arrOfLengthDiff.push(diff)
      }
    }
    return Math.max(...arrOfLengthDiff)
}

//OR

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

