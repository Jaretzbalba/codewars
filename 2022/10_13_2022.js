// 8 kyu: Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = month => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
};

//OR

const quarterOf = m => Math.ceil(m / 3);

// 7 kyu: Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(e => vowels.includes(e)).length;
}

// 7 kyu: Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  //split string by ('')
  //filter through array of letters and remove vowels
  //join by ('') and return string
  return str
    .split('')
    .filter(e => !'aeiouAEIOU'.includes(e))
    .join('');
}

//OR

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// 7 kyu: Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  //convert number to string and split by ('')
  //map through the array and square each value
  //join by ('')
  //return value converted to a number
  return Number(
    num
      .toString()
      .split('')
      .map(e => e ** 2)
      .join('')
  );
}

//6 kyu: Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  var array = words.split(' '); //split array by (' ')
  var sortedArray = []; //created an empty array for sorted strings
  for (i = 1; i <= array.length; i++) {
    //create nested for loops
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        //iterate through each word and search for indexOf current number
        sortedArray.push(array[j]); //if it return a number > 0, push that word to the sorted array
      }
    }
  }
  return sortedArray.join(' '); //return the sorted array joined by (' ')
}
