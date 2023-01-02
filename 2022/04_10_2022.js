
// 7 kyu: The highest profit wins!
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min,max]
}

// 7 kyu: Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    if(numbers.filter(a => a === numbers[0]).length % 2 === 0) {
      let oddNum = numbers.filter(a => a !== numbers[0])
      return oddNum[0]
    } else {
      return numbers[0]
    }
}

//OR

function stray(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return nums.filter(x => x == max).length == 1 ? max : min
}