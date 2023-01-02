// 6 kyu: Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  //sort string, toLowerCase(), split('')
  //filter elements if it is === to the next element in array
  let sortedText = text.toLowerCase().split('').sort();
  let duplicateArr = sortedText.filter((e, i, a) => e === a[i + 1]);
  return duplicateArr.filter((e, i, a) => e !== a[i + 1]).length;
}
