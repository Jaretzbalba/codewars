
// 7 kyu: Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


function sumTwoSmallestNumbers(numbers) {  
    let sortedArray = numbers.sort((a,b) => a-b)
    return sortedArray[0] + sortedArray[1]
}

// 7 kyu: Credit Card Mask
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// maskify("4556364607935616") == "############5616"

function maskify(cc) {
    let ccArr = cc.split('');
    for (let i = -5; i >= -ccArr.length; i--) {
      ccArr.splice(i,1,"#")
    } return ccArr.join('')
}

