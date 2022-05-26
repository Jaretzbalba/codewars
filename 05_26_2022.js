// 6 kyu: Frog jumping
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

function solution(a) {
  //initialize jump counter to 0
  //initialize frog index position to 0
  //While frog index > 0 and  < a.length-1
  //add current value to frog index position
  let jumpCounter = 0;
  let frogIndex = 0;
  if (a.reduce((a, b) => a + b, 0) == 0) {
    return -1;
  }
  while (typeof a[frogIndex] !== 'undefined') {
    frogIndex += a[frogIndex];
    jumpCounter++;

    if (jumpCounter > a.length) {
      return -1;
    }
  }
  return a.length ? jumpCounter : -1;
}
