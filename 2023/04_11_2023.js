// 7 kyu:Y ou're a square!
// Given an integral number, determine if it's a square number:

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

//OR

const isSquare = n => Number.isInteger(Math.sqrt(n));

// 7 kyu: Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  //convert number to string
  //split string into individual numbers
  //sort numbers from high to low
  //join numbers
  //convert string back to number
  let num = n.toString();
  num = +num
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return num;
}

//OR

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

// 6 kyu: Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  //if statement with 3 scenarios
  //if array is empty, "no one likes this"
  //if array has 1 person, "<Name> likes this"
  //if array has 2 people, "<Name> and <Name> like this"
  //if array has 3 people, "<Name>, <Name< and <Name> like this"
  //if array has > 3 people, <names[0]>, <names[1]>, and <names.length-2> others like this
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
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
