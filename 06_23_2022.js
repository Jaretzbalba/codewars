// 7 kyu: Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x) {
  //split string by (' ')
  //use sort method on array of strings
  //use a compare function
  //initialize variables for last letter for a and b
  //if last etter from a < last letter from b return -1 else return 1
  let splitStr = x.split(' ');
  return splitStr.sort((a, b) => {
    let strA = a[a.length - 1];
    let strB = b[b.length - 1];
    if (strA < strB) {
      return -1;
    } else {
      return 1;
    }
  });
}

// 7 kyu: Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  //convert number to string and spread into array
  //initialzie empty array to push values to
  //loop through the num array and push values based on given rules
  //join array ('')
  num = [...num.toString()];
  console.log(num);
  let finalNum = [];
  for (let i = 0; i < num.length; i++) {
    if (i === num.length - 1 && num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
      finalNum.push(num[i]);
    } else if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
      finalNum.push(`${num[i]}-`);
    } else {
      finalNum.push(num[i]);
    }
  }
  return finalNum.join('');
}
