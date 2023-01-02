// 8 kyu: Take an Arrow to the knee, Functionally
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

var ArrowFunc = function (arr) {
  return arr.map(e => String.fromCharCode(e)).join(''); //Complete this function
};

// 8 kyu: Enumerable Magic #1 - True for All?
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

function all(arr, fun) {
  //use every method on arr with fun as test
  return arr.every(fun);
}

// 8 kyu: Duck Duck Goose
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

function duckDuckGoose(players, goose) {
  //return array with index equal to the modulus of goose % players.length
  return players[(goose - 1) % players.length].name;
}

// 8 kyu: UEFA EURO 2016
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  //if scores[0] > scores[1], let gameResult equal teams[0] and return message with winner
  //else if socres[0] < scores[1], let gameResult equal teams[1] and return message with winner
  //else return message with draw
  let gameResult;
  console.log(scores);
  if (scores[0] > scores[1]) {
    gameResult = `${teams[0]} won!`;
    return `At match ${teams[0]} - ${teams[1]}, ${gameResult}`;
  } else if (scores[0] < scores[1]) {
    gameResult = `${teams[1]} won!`;
    return `At match ${teams[0]} - ${teams[1]}, ${gameResult}`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}
