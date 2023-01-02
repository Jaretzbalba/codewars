// 7 kyu: Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];

function greetDevelopers(list) {
  //map through array of objects and return current object destructured with added property
  return list.map(e => ({
    ...e,
    greeting: `Hi ${e.firstName}, what do you like the most about ${e.language}?`,
  }));
}

// 7 kyu: Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

function countDevelopers(list) {
  //initialize counter to zero
  //create variable holding criteria
  //convert array of objects to arrays of just their values
  //iterate through every inner array in the array
  //if it includes Europe and Javascipt; counter ++
  //return counter
  let counter = 0;
  let values = ['Europe', 'JavaScript'];
  let arr = list.map(e => Object.values(e));
  arr.forEach(e =>
    e.includes(values[0]) && e.includes(values[1]) ? counter++ : e
  );
  return counter;
}

//OR

function countDevelopers(list) {
  //filter through each object in the array
  //return object if it's continent property is Europe AND language is Javascript
  //return the length of that new filtered array
  return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript')
    .length;
}

// 7 kyu: Char Code Calculation
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
  //split string by ('') and map through and return charCodeAt() and join('')
  //replace all 7 values with 1
  //convert number toString and split('') and reduce
  //return difference between previous totals
  let total1 = x
    .split('')
    .map(e => e.charCodeAt(0))
    .join('');
  console.log(total1);
  let total2 = total1.replace(/7/g, 1);
  console.log(total2);
  let sumOf1 = total1
    .toString()
    .split('')
    .reduce((a, b) => a + +b, 0);
  let sumOf2 = total2
    .toString()
    .split('')
    .reduce((a, b) => a + +b, 0);
  return sumOf1 - sumOf2;
}
