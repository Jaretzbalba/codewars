// 6 kyu: Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  //filter array to have just the odd numbers and sort them
  //set a counter for odd number array index
  //iterate through original array and if current element isn't even replace with next count index
  let oddArr = array.filter(a => a % 2 !== 0).sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = oddArr[j];
      j++;
    }
  }
  return array;
}

//OR

function sortArray(array) {
  //filter array to have just the odd numbers and sort them
  //map through original array. If odd return first element of odd array, if even return current element
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

// 6 kyu: Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  //let wordArr = split words by " " delimitter
  //map through array and split word by "" delimmiter and then map again and change every element to its position value
  //map through this new array and reduce each index
  //find index with highest value
  //return value at that index in wordArr
  let wordArr = x.split(' ');
  let positionVals = wordArr.map(a =>
    a.split('').map(b => b.charCodeAt() - 96)
  );
  let reducedArr = positionVals.map(c => c.reduce((a, b) => a + b, 0));
  let highestValIndex = reducedArr.indexOf(Math.max(...reducedArr));
  return wordArr[highestValIndex];
}
