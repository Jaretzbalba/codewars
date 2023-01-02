// 7 kyu: Switcheroo
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  return x
    .split('')
    .map(e => {
      if (e == 'b') {
        return 'a';
      } else if (e == 'a') {
        return 'b';
      } else {
        return e;
      }
    })
    .join('');
}

//OR

function switcheroo(x) {
  return x.replace(/[ab]/g, x => (x == 'a' ? 'b' : 'a'));
}

// 6 kyu: Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  //if length of walk array isn't 10 return false
  //if # of n/s and # of e/w are equal return true, otherwise return false
  let locationNS = 0,
    locationEW = 0;
  if (walk.length !== 10) return false;
  walk.forEach(e => {
    if (e == 'n') {
      locationNS++;
    } else if (e == 's') {
      locationNS--;
    } else if (e == 'e') {
      locationEW++;
    } else if (e == 'w') {
      locationEW--;
    }
  });
  return locationNS == 0 && locationEW == 0 ? true : false;
}

//OR

function isValidWalk(walk) {
  //if length of walk array isn't 10 return false
  //if # of n/s and # of e/w are equal return true, otherwise return false
  let dy = 0,
    dx = 0,
    dt = walk.length;
  walk.forEach(e => {
    switch (e) {
      case 'n':
        dy++;
        break;
      case 's':
        dy--;
        break;
      case 'e':
        dx++;
        break;
      case 'w':
        dx--;
        break;
    }
  });
  return dt == 10 && dy == 0 && dx == 0;
}

// 6 kyu: Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  return Array.isArray(iterable)
    ? iterable.filter((e, i, a) => e !== a[i + 1])
    : iterable.split('').filter((e, i, a) => e !== a[i + 1]);
};

//OR

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((e, i, a) => e !== a[i + 1]);
};

// 6 kyu: Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  let result = [];
  words.split(' ').forEach(e => (result[e.match(/[0-9]/g) - 1] = e));
  return result.join(' ');
}

//OR

function order(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
}

// 6 kyu: Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //create array of alphabet
  //if string contains every alaphet return true otherwise return false
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map(x => String.fromCharCode(x));
  console.log(string);
  return alphabet.every(e => string.toUpperCase().includes(e));
}
