
// 7 kyu: Jaden Casing Strings
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
    let splitStr = this.split(' ');
    let capFirstLetter = splitStr.map((word,index) => word[0].toUpperCase() + word.slice(1)).join(' ') 
    return capFirstLetter
};

// 7 kyu: Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let sortedArray = s.split(' ').map(a => a.length).sort((a,b) => a - b)
    return sortedArray[0]
}

// 7 kyu: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// function XO(str) {
//     let xoFilter = str.split('').map(a => a.toLowerCase()).filter(a => (a==='x')||(a==='o'));
//     console.log(xoFilter)
//     let xCount = 0; 
//     let oCount = 0;
//     xoFilter.forEach(a => a === 'x' ? xCount++ : oCount++)
//     return xCount === oCount ? true : false
// }

// //OR

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// 7 kyu: Complementary DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    return dna.split('').map(x => {
      if(x === 'A') {
        return x = 'T';
      } else if (x === 'T') {
        return x = 'A';
      } else if (x === 'C') {
        return x = 'G';
      } else if (x === 'G') {
        return x = 'C';
      }
    }).join('')
}

//OR

let pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(x => pairs[x] ).join('')
}