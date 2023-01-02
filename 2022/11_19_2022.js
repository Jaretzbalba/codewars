// 7 kyu: Row Weights
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  let team1 = [0];
  let team2 = [0];
  array.map((e, i) => (i % 2 === 0 ? team1.push(e) : team2.push(e)));
  return [[team1.reduce((a, b) => a + b, 0)], [team2.reduce((a, b) => a + b, 0)]].flat();
}

// 7 kyu:
