// 6 kyu: Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  //lower case word, split word , and iterate through each element
  //compare current element index to last index of current element
  //if === return"(" else return ")"
  return word
    .toLowerCase()
    .split('')
    .map((e, i, a) => (a.indexOf(e) == a.lastIndexOf(e) ? '(' : ')'))
    .join('');
}

// 6 kyu: Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  //copy original array and split between x and y coordinates so n/s in one array and e/w in another
  //map through array, replace n,e,s,w to respective increments i.e. y:1,x:1,y:-1,x:-1 respectively
  //reduce array and check if === 0 return true or false
  //compare x and y array and array length to see if it satisfies conditions
  let arrXCopy = walk.slice(0);
  let arrYCopy = walk.slice(0);
  let xCoord = arrXCopy.filter(a => a === 'n' || a === 's');
  let yCoord = arrYCopy.filter(a => a === 'e' || a === 'w');
  let xVal =
    xCoord
      .map(a => a.replace('n', 1).replace('s', -1))
      .reduce((a, b) => +a + +b, 0) === 0
      ? true
      : false;
  let yVal =
    yCoord
      .map(a => a.replace('e', 1).replace('w', -1))
      .reduce((a, b) => +a + +b, 0) === 0
      ? true
      : false;
  return xVal === true && yVal === true && walk.length === 10 ? true : false;
}

//OR

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        dy--;
        break;
      case 's':
        dy++;
        break;
      case 'w':
        dx--;
        break;
      case 'e':
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
