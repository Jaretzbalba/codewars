
// 7 kyu: Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' ||
          str[i] === 'e' ||
          str[i] === 'i' ||
          str[i] === 'o' ||
          str[i] === 'u') {
          vowelsCount++
          }
    }
    return vowelsCount;
}

// 8 kyu: Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    return number*-1
}

// 8 kyu: Convert a Number to a String!
// We need a function that can transform a number into a string.

function numberToString(num) {
    return num.toString()
}

// 8 kyu: Reversed Strings
// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let strArr = str.split('');
  //   return console.log(strArr)
    let revArr = strArr.reverse();
  //   return console.log(revArr)
    let revStr = revArr.join('');
    return revStr;
}
