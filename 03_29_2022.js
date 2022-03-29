
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