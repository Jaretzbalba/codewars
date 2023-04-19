// 7 kyu: Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  //split str and iterate throguh each letter
  //use map
  //return letter capitalized + letter.repeat(index)
  s = s.toLowerCase().split('');
  return s
    .map((letter, index) => letter.toUpperCase() + letter.repeat(index))
    .join('-');
}

// 7 kyu: Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  return dna
    .split('')
    .map(el => {
      if (el == 'A') {
        return 'T';
      } else if (el == 'T') {
        return 'A';
      } else if (el == 'C') {
        return 'G';
      } else if (el == 'G') {
        return 'C';
      }
    })
    .join('');
}

//OR

let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

function DNAStrand(dna) {
  return dna
    .split('')
    .map(x => pairs[x])
    .join('');
}

// 7 kyu: Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  //sort array
  //add [0] and [1]
  let sortedNums = numbers.sort((a, b) => a - b);
  return sortedNums[0] + sortedNums[1];
}

// 6 kyu: Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  //initialize empty object
  //create an object of all the elements and their count
  //iterate through object values and check if >= 2
  //if so, increment count and then return
  let count = {};
  let total = 0;

  text
    .toLowerCase()
    .split('')
    .forEach(el => (count[el] ? count[el]++ : (count[el] = 1)));

  for (el in count) {
    if (count[el] >= 2) {
      total++;
    }
  }
  return total;
}

//OR

function duplicateCount(text) {
  //sort string, toLowerCase(), split('')
  //filter elements if it is === to the next element in array
  let sortedText = text.toLowerCase().split('').sort();
  let duplicateArr = sortedText.filter((e, i, a) => e === a[i + 1]);
  return duplicateArr.filter((e, i, a) => e !== a[i + 1]).length;
}

// 6 kyu: Meeting
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  //split s by (';') and then split again by (':')
  //map through array of names
  //return `(${name[1]}, ${name[0]})` sorted and join by ('')
  let splitNames = s
    .toUpperCase()
    .split(';')
    .map(name => name.split(':'));
  return splitNames
    .map(name => `(${name[1]}, ${name[0]})`)
    .sort()
    .join('');
}
