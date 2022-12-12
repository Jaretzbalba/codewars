// 6 kyu: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = n =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ');

// 6 kyu: Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let count = {};
  string = string.split('');
  for (const element of string) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}

//OR

function count(string) {
  let count = {};
  string.split('').forEach(e => (count[e] ? count[e]++ : (count[e] = 1)));
  return count;
}
