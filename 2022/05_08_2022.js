// 7 kyu: Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  //get length of array to figure out largest exponent
  //map through elemnts and dpeneding on index and element change to it's perspective value
  //reduce array
  let length = arr.length - 1;
  let binaryValArr = arr.map((e, i) => (e === 1 ? 2 ** (length - i) : 0));
  return binaryValArr.reduce((a, b) => a + b, 0);
};

// 7 kyu: Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.
function checkExam(array1, array2) {
  let finalVal = array2
    .map((e, i) => {
      if (e === array1[i]) {
        return 4;
      } else if (e === '') {
        return 0;
      } else {
        return -1;
      }
    })
    .reduce((a, b) => a + b, 0);
  if (finalVal < 0) {
    return 0;
  } else {
    return finalVal;
  }
}
