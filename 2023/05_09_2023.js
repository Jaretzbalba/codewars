// 6 kyu: Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //create array of all alphabet letters
  //iterate through alphabet and check if string includes every letter
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map(x => String.fromCharCode(x))
  return alphabet.every(e => string.toUpperCase().includes(e))
}

// 6 kyu: Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  //initialze result array
  //split string
  //iterate through words
  //for each word, find the digit and set result[digit -1] = word
  let result = []
  let wordArr = words
    .split(' ')
    .forEach(word => (result[word.match(/[0-9]/g) - 1] = word))
  return result.join(' ')
}

//OR

function order(words) {
  //split string
  //sort through words by digit found in each word using match
  //join words
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ')
}
