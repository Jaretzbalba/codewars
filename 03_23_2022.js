
// 8 kyu: Convert a String to a Number!
// We need a function that can transform a string into a number. 

var stringToNumber = function(str){
    return Number(str)
}

// 8 kyu: Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
        return value1 + value2;
        case '-':
        return value1 - value2
        case '*':
        return value1 * value2
        case '/':
        return value1 / value2
        default:
        console.log("Error")
    }
}

// 8 kyu: Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// 8 kyu: Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
}

// 6 kyu: Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let sum = 0
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum
}