

// 8 kyu: Count of positives / sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];
    let posNums = input.filter(num => num > 0);
    let negNums = input.filter(num => num <= 0);
    let posAmount = posNums.length;
    let negSum = negNums.reduce((a,b,) => a+b,0);
    return [posAmount,negSum]
}



