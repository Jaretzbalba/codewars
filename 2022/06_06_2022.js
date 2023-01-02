// 7 kyu: Evens times last
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  //reduce array
  //if current element index is even multiply by integer in last index
  return numbers.reduce(
    (prev, curr, i) =>
      prev + (i % 2 === 0 ? curr * numbers[numbers.length - 1] : curr * 0),
    0
  );
}
