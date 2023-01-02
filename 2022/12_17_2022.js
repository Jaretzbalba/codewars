// 6 kyu: Backspaces in string
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  let result = [];
  s.split('').forEach(e => (e == '#' ? result.pop() : result.push(e)));
  return result.join('');
}
