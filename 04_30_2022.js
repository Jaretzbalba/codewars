// 7 kyu: Simple Fun #176: Reverse Letter
// Given a string str, reverse it omitting all non-alphabetic characters.

reverseLetter = s =>
  s
    .replace(/[^a-z]/gi, '')
    .split('')
    .reverse()
    .join('');
