
// 7 kyu: Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    return array.reduce( (a,b) => a+b, 0) % 2 === 0 ? 'even' : 'odd'
}
   
// 7 kyu: Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(a => a.split('').reverse().join('')).join(' ')
}

// 7 kyu: Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const vowels = 'aeiou';

function disemvowel(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
}