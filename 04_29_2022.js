// 6 kyu: Who likes it?
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  //iterate through array and return names in a string
  //make if statement for differnet array length cases
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//OR

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

// 6 kyu: Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //Iterate through every odd index in array
  //if current element !== to previous element, return previous element
  let sortedArr = A.sort((a, b) => a - b);
  if (A.length === 1) {
    return A[0];
  }
  console.log(sortedArr);
  for (let i = 1; i < A.length; i += 2) {
    if (sortedArr[i] !== sortedArr[i - 1]) {
      console.log(sortedArr[i]);
      return A[i - 1];
    }
  }
  return A[A.length - 1];
}

// 6 kyu: Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
  //For loop going through each element in array b
  //filter array a using each element from array b
  for (let i = 0; i < b.length; i++) {
    a = a.filter(a => a !== b[i]);
  }
  return a;
}

// 6 kyu: Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //split string by " "
  //map through each element in array
  //current element + element[0]
  //slice(0)
  //current element + ay
  //join array elements by " "
  return str
    .split(' ')
    .map(a => (a === '!' || a === '?' ? a : (a + a[0]).slice(1) + 'ay'))
    .join(' ');
}
