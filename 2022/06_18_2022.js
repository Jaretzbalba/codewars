// 7 kyu: Name Array Capping
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
  //map through names
  //at each index, return the first letter capitalize and the rest of the string lower cased
  return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}
