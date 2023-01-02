// 7 kyu: Birthday I - Cake
// It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.

// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

// When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.

// You will work out the number of candles that will fall from the provided lowercase string (debris). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.

// For example:

// "abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
// If the carpet catches fire, return "Fire!", if not, return "That was close!".

function cake(x, y) {
  //spread string into array
  //use map method
  //if element is even return char code else return the position in alphabet (not index)
  //reduce the returned array of values as number of fallen candles
  //if num of fallen candles > 70% of total return 'Fire' else return 'That was close!'
  let fallenCandles = [...y]
    .map((e, i) => (i % 2 === 0 ? e.charCodeAt(0) : e.charCodeAt(0) - 96))
    .reduce((a, b) => a + b, 0);
  return fallenCandles >= x * 0.7 ? 'Fire!' : 'That was close!';
}

// 7 kyu: Use reduce() to calculate the sum of the values in an array
// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// var someNumbers = [1,2,3,4,5,6,7,8,9,10];

// sum(someNumbers); // should return 55

function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  return array.reduce((a, b) => a + b, 0);
}

// 7 kyu: By 3, or not by 3? That is the question . . .
// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

function divisibleByThree(str) {
  //spread str into array
  //use reduce method to get sum of array
  //return true of returned value is dividsible by 3 if not return false
  return [...str].reduce((a, b) => +a + +b, 0) % 3 === 0 ? true : false;
}

// 7 kyu: Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

function isSameLanguage(list) {
  //use every method to check if every elements language property is === first element's langauge
  return list.every(e => e.language === list[0].language);
}
