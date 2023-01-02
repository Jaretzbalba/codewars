// 6 kyu: Give me a Diamond
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
  }
  return str;
}

// 6 kyu: Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  let splitWords = text.split(' ');
  return splitWords
    .map(e => {
      if (e.length <= 2) {
        return e.charCodeAt(0) + e.slice(1);
      } else {
        let temp = e[1];
        return e.charCodeAt(0) + e[e.length - 1] + e.slice(2, -1) + temp;
      }
    })
    .join(' ');
};

// 6 kyu: The Vowel Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  let vowelCode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return string
    .split('')
    .map(e => (vowelCode[e] ? vowelCode[e] : e))
    .join('');
}

function decode(string) {
  let vowelCode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return string
    .split('')
    .map(e => (vowelCode[e] ? vowelCode[e] : e))
    .join('');
}
