// 7 kyu: Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  //split string of numbers by ('') and sorted from high to low
  //return string with high and low
  let sortedNums = numbers.split(' ').sort((a, b) => +b - +a);
  return `${sortedNums[0]} ${sortedNums[sortedNums.length - 1]}`;
}

// 7 kyu: Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  //determine if word length is even or odd
  //if odd, return middle character
  //if even, return middle 2 characters
  if (s.length % 2 !== 0) {
    return s[Math.floor(s.length / 2)];
  } else {
    return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  }
}

// 7 kyu: You're a Square
// Given an integral number, determine if it's a square number

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

// 7 kyu: Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

// 7 kyu: List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(e => typeof e === 'number');
}
