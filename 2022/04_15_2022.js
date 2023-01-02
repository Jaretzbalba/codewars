
// 8 kyu: Grasshopper - Personalized Message
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    return name === owner ? `Hello boss` : `Hello guest`
}

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

function nbDig(n, d) {
    let arr = []
    // loop from 1 to n and square
    for (let i = 0; i <= n; i++){
      arr.push(i**2)
    }
    let splitArr = arr.join('').split('').map(el => Number(el))
    let dArr = splitArr.filter(el => el === d) 
    return dArr.length 
}

// 8 kyu: Can we divide it?
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b ===0 ? true : false
}

// 8 kyu: Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
}

// 8 kyu: Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return 180-(a+b);
}

// 8 kyu: Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    return x.map( a => Number(a)).reduce((a,b) => a + b)
}

// 8 kyu: Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('')
}

// 8 kyu: Rock Paper Scissors!

const rps = (p1, p2) => {
    if((p1 === 'rock' && p2 === 'scissors')||
      (p1 === 'paper' && p2 === 'rock') ||
      (p1 === 'scissors' && p2 === 'paper')) {
      return 'Player 1 won!'
    } else if (p1 === p2) {
      return 'Draw!'
    } else {
      return 'Player 2 won!'
    }
};
