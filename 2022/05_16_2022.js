// 6 kyu: Multiplication table
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let result = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  return result;
};

// 7 kyu: Form The Minimum
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// minValue({5, 7, 5, 9, 7})  ==> return (579)

function minValue(values) {
  //sort values from least to greatest
  //filter elements that !== next element
  //concat elements and convert to number
  let sortedVals = values.sort((a, b) => a - b);
  let minVal = sortedVals.filter((e, i, a) => e !== a[i + 1]);
  return Number(minVal.join(''));
}

// 6 kyu: Data Reverse
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  //split array by groups of 8
  //reverse array
  let chunked = [];
  let size = 8;
  for (let i = 0; i < data.length; i += size) {
    chunked.push(data.slice(i, i + size));
  }
  let reverseChunk = chunked.reverse();
  console.log(reverseChunk);
  return reverseChunk
    .join(',')
    .split(',')
    .map(e => Number(e));
}

//OR

const dataReverse = data => {
  //initalize empty array
  //loop with 8 step increment
  //use unshift to add elements by groups of 8 to new array
  //return array
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
