
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
