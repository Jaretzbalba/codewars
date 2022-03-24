
// 7 kyu: You're a square!
// Given an integral number, determine if it's a square number

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
}

// 7 kyu: Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''))
}

