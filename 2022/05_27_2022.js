// 7 kyu: Smallest value of an array
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
    //if toReturn === value return min value
    //if toReturn === index return index of value
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

// 6 kyu: Find within array
// We'll create a function that takes in two parameters:

// a sequence (length and types of items are irrelevant)
// a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

// If the function given returns false for all members of the sequence, your function should return -1.

// var trueIfEven = function(value, index) { return (value % 2 === 0) };
// findInArray([1,3,5,6,7], trueIfEven) // should === 3

var findInArray = function (array, iterator) {
    //map through array and if iterator(current element) === true return true
    //findIndex of true 
    return array.map((v, i) => iterator(v, i) == true ? true : false).findIndex(e => e == true)
};
