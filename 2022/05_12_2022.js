// 6 kyu: Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
  //iterate through array of numbers and for each element test each element ahead of it to see if it adds up to target
  //don't need to check backawards only forwards
  let result = [];
  numbers.map((e, i, a) => {
    for (let j = i + 1; j < numbers.length; j++) {
      if (e + a[j] === target) {
        result.push(a.indexOf(e));
        result.push(j);
      }
    }
  });
  return result;
}

//OR

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

// 6 kyu: The Supermarket Queue
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
  /**
   * ------------------ EXAMPLE:
   * if customers --> [2, 3, 10]
   * and if n --> 2
   */

  let queueArr = Array(n).fill(0);
  // EXAMPLE: queueArr --> [0, 0];

  customers.forEach(customer => {
    queueArr[0] += customer;
    /**
     * ------------------ EXAMPLE:
     * 1 iteration queueArr --> [2, 0];
     * 2 iteration queueArr --> [3, 2];
     * 3 iteration queueArr --> [12, 3];
     */

    queueArr.sort((a, b) => a - b);
    /**
     * ------------------ EXAMPLE:
     * 1 iteration queueArr --> [0, 2];
     * 2 iteration queueArr --> [2, 3];
     * 3 iteration queueArr --> [3, 12];
     */
  });

  return queueArr[queueArr.length - 1]; // EXAMPLE: last num in queueArr --> 12
}

//OR

function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach(customer => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

// 8 kyu: Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

function arr(N) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(i);
  }
  return arr;
}
