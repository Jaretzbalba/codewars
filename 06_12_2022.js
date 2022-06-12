// 7 kyu: Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }];

function getFirstPython(list) {
  //filter through each object in the array
  //return object if it's langauge property is Python
  //map through the result and return the name and country property
  //if no python developers return message, if there are return name and country
  let info = list
    .filter(x => x.language == 'Python')
    .map(e => `${e.firstName}, ${e.country}`);
  return list.find(x => x.language == 'Python')
    ? info[0]
    : 'There will be no Python developers';
}

// 7 kyu: Convert an array of strings to array of numbers
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringarray) {
  return stringarray.map(e => parseFloat(e));
}

// 6 kyu: Odd-heavy Array
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

function isOddHeavy(n) {
  //if n.find(e => e % 2 !== 0) returns undefined then return false
  //create array of odd nums, sort and get min val
  //create array of even nums, sort and get max val
  //if minOdd > maxEven return true else return false
  let oddNums = n.filter(e => e % 2 !== 0).sort((a, b) => a - b);
  let minOdd = Math.min(...oddNums);
  let evenNums = n.filter(e => e % 2 == 0).sort((a, b) => a - b);
  let maxEven = Math.max(...evenNums);
  if (!n.find(e => e % 2 !== 0)) return false;
  return minOdd > maxEven ? true : false;
}
