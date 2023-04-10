// 7 kyu: Digit*Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(e => e ** 2)
      .join('')
  );
}

// 7 kyu: Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str
    .split('')
    .filter(e => !vowels.includes(e))
    .join('');
}

//OR

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// 7 kyu: Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  let nums = numbers.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
