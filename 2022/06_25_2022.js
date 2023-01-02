// 7 kyu: Array Leaders (Array Series #3)
// An element is leader if it is greater than The Sum all the elements to its right side.

// Given an array/list [] of integers , Find all the LEADERS in the array.

function arrayLeaders(numbers) {
  //use filter method
  //use a callback function to test on each element
  //initialize variable for each iteration that get all elements to the right of current element
  //reduce those elements
  //return true if current element > reduced value else return false
  return numbers.filter((e, i, a) => {
    let m = a.slice(i + 1).reduce((a, b) => a + b, 0);
    console.log(m);
    return e > m ? true : false;
  });
}

// 7 kyu: Maximum Gap (Array Series #4)
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
  //sort array of numbers
  //initialize variable that's equal to the number of gaps
  //intitialize empty array to push gap values
  //return max value from gaps array
  let sortedNums = numbers.sort((a, b) => a - b);
  console.log(sortedNums);
  let gaps = [];
  let m = numbers.length - 1;
  for (let i = 0; i < m; i++) {
    gaps.push(sortedNums[i + 1] - sortedNums[i]);
    console.log(gaps);
  }
  return Math.max(...gaps);
}

// 6 kyu: Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

function findSenior(list) {
  //set variable to max age in objects
  //filter through array of objects
  //return object
  let max = Math.max(...list.map(e => e.age));
  return list.filter(e => e.age === max);
}
