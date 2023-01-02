// 6 kyu: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
  //create array of numbers starting from a to b
  //filter through array of numbers if curr val === curr val ** (curr index + 1)
  let numArr = [];
  for (let i = a; i <= b; i++) {
    numArr.push(i);
  }
  return numArr.filter(
    e =>
      e ==
      e
        .toString()
        .split('')
        .reduce((a, b, i) => a + b ** (i + 1), 0)
  );
}

// 6 kyu: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = n =>
  //convert to string, split(''), reverse
  //map through vals and raise each val to the index it is in
  //filter out zero vals, reverse, and join ('+')
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ');
