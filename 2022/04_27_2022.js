// 8 kyu:
// Function 2 - squaring an argument

const square = x => x ** 2;

// 8 kyu: Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0);
}

// 8 kyu: Keep up the hoop
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n >= 10
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
}

// 8 kyu: Student's Final Grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// 7 kyu: Find the middle element
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// For example:
// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1

function gimme(triplet) {
  let originalArray = triplet.slice(0);
  let sortedArray = triplet.sort((a, b) => a - b);
  let middleNum = sortedArray[1];
  return originalArray.indexOf(middleNum);
}
