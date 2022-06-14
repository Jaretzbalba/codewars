// 6 kyu: Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  //initialize leftSide and rightSide values
  //for loop that iterates through each index in the input array
  //for the leftSide, slice the array from 0 to given index and then reduce
  //for the rightSide, slice the array from index to the end of the array and then reduce
  //if leftSide === rightSide return the index
  //if not, then return -1
  let leftSide, rightSide;
  for (let i = 0; i < arr.length; i++) {
    leftSide = arr.slice(0, i).reduce((a, b) => a + b, 0);
    rightSide = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSide === rightSide) {
      return i;
    }
  }
  return -1;
}

// 6 kyu: Mexican Wave
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  //initilaize empty array
  //iterate through each character in str
  //if character at index !== '' push str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1)
  //return resultant array
  let finalArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      console.log(str[i]);
      finalArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return finalArr;
}
